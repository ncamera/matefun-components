import {
  Component,
  Event,
  EventEmitter,
  Host,
  Prop,
  State,
  h
} from "@stencil/core";

@Component({
  tag: "matefun-modal-nuevo-archivo",
  styleUrl: "modal-nuevo-archivo.scss",
  shadow: false
})
export class ModalSeleccionarDirectorio {
  private fileNameToAdd: string = "";

  private fileDescriptionToAdd: string = "";

  /**
   * `true` si el input con el nombre del archivo a agregar está vacío
   */
  @State() fileNameIsEmpty: boolean = true;

  /**
   * `true` si el input con la descripción del archivo a agregar está vacío
   */
  @State() fileDescriptionIsEmpty: boolean = true;

  /**
   * Texto del label asociado al button de confirmar la creación del archivo.
   */
  @Prop() confirmLabel: string;

  /**
   * El título del modal.
   */
  @Prop() header: string;

  /**
   * Texto del label asociado al input para ingresar la descripción del nuevo archivo.
   */
  @Prop() fileDescriptionLabel: string;

  /**
   * Texto del label asociado al input para ingresar el nombre del nuevo archivo.
   */
  @Prop() fileNameLabel: string;

  /**
   * `true` si el modal está abierto.
   */
  @Prop() opened = false;

  /**
   * Determina si el archivo a agregar es un directorio o un archivo.
   */
  @Prop() typeOfFile: "directory" | "file" = "file";

  /**
   * Se dispara cuando se confirma la creación del archivo en el directorio actual.
   */
  @Event() confirmFileCreation: EventEmitter<any>;

  /**
   * Actualiza la variable `fileNameIsEmpty` que determina si el nombre de
   * archivo ingresado es vacío o no.
   */
  private updateFileName = (event: UIEvent) => {
    event.stopPropagation();

    this.fileNameToAdd =
      event.target && (event.target as HTMLInputElement).value;
    this.fileNameIsEmpty = !this.fileNameToAdd;
  };

  /**
   * Actualiza la variable `fileDescriptionIsEmpty` que determina si la
   * descripción del directorio a ingresado es vacía o no.
   */
  private updateFileDescription = (event: UIEvent) => {
    event.stopPropagation();

    this.fileDescriptionToAdd =
      event.target && (event.target as HTMLInputElement).value;
    this.fileDescriptionIsEmpty = !this.fileDescriptionToAdd;
  };

  /**
   * Emite el evento de confirmación del archivo creado, retornando el nombre
   * de archivo y su descripción.
   */
  private confirmFile = () => {
    this.confirmFileCreation.emit({
      nombre: this.fileNameToAdd,
      descripcion: this.fileDescriptionToAdd
    });
  };

  render() {
    return (
      <Host>
        <matefun-modal opened={this.opened}>
          <span slot="header">{this.header}</span>

          <div slot="body" class="stretch-width">
            <div class="form-group">
              <label htmlfor="file-name" class="form-control-label">
                {this.fileNameLabel}
              </label>
              <input
                id="file-name"
                type="text"
                class="form-control"
                value=""
                onInput={this.updateFileName}
              />
            </div>

            {this.typeOfFile !== "file" && (
              <div class="form-group">
                <label htmlfor="file-description" class="form-control-label">
                  {this.fileDescriptionLabel}
                </label>
                <textarea
                  id="file-description"
                  class="form-control"
                  value=""
                  onInput={this.updateFileDescription}
                />
              </div>
            )}
          </div>

          <button
            slot="primary-action"
            type="button"
            class="btn btn-success"
            disabled={
              this.fileNameIsEmpty &&
              (this.typeOfFile == "file" || this.fileDescriptionIsEmpty)
            }
            onClick={this.confirmFile}
          >
            {this.confirmLabel}
          </button>
        </matefun-modal>
      </Host>
    );
  }
}
