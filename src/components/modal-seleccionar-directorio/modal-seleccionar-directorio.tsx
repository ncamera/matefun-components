import {
  Component,
  Event,
  EventEmitter,
  Host,
  Prop,
  State,
  h
} from "@stencil/core";

import { Archivo } from "../../common/interfaces";

@Component({
  tag: "matefun-modal-seleccionar-directorio",
  styleUrl: "modal-seleccionar-directorio.scss",
  shadow: false
})
export class ModalSeleccionarDirectorio {
  private currentPath = "/";

  private fileNameToAdd: string = "";

  /**
   * `true` si el input con el nombre del archivo a agregar está vacío
   */
  @State() fileNameIsEmpty: boolean = true;

  /**
   * Texto del label asociado al button de confirmar la creación del archivo.
   */
  @Prop() confirmLabel: string;

  @Prop() fileContent: string;

  /**
   * Texto del label asociado al input para ingresar el nombre del nuevo archivo.
   */
  @Prop() fileNameLabel: string;

  @Prop() import: boolean = false;

  @Prop() importLabel: string;

  /**
   * Texto asociado al botón de navegar hacia atrás.
   */
  @Prop() navigateBackLabel: string;

  /**
   * El título del modal.
   */
  @Prop() header: string;

  /**
   * `true` si el modal está abierto.
   */
  @Prop() opened = false;

  /**
   * Directorio root sobre el cual se están visualizando sus archivos.
   */
  @Prop() rootDirectory: Archivo = null;

  /**
   * Se dispara cuando se confirma la creación del archivo en el directorio actual.
   */
  @Event() confirmFileCreation: EventEmitter<any>;

  /**
   * Se dispara cuando se quiere navegar hacia un subdirectorio.
   */
  @Event() navTo: EventEmitter<any>;

  /**
   * Se dispara cuando se quiere navegar hacia el directorio padre.
   */
  @Event() navBack: EventEmitter<any>;

  /**
   * Navega hacia el directorio `file`.
   * @param file Directorio al cual se quiere navegar
   */
  private navigateToDirectory = (file: Archivo) => (event: MouseEvent) => {
    event.stopPropagation();
    this.navTo.emit(file);

    this.currentPath += `${file.nombre}/`;
  };

  private navigateBack = (event: MouseEvent) => {
    event.stopPropagation();
    this.navBack.emit(this.rootDirectory);

    const lastDirectoryIndex = this.currentPath.lastIndexOf(
      `${this.rootDirectory.nombre}`
    );

    this.currentPath = this.currentPath.substring(0, lastDirectoryIndex);
  };

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
   * Emite el evento de confirmación del archivo creado, retornando el nombre
   * de archivo y su directorio padre a agregar.
   */
  private confirmFile = () => {
    this.confirmFileCreation.emit({
      nombre: this.fileNameToAdd,
      padreId: this.rootDirectory.id
    });
  };

  private esDirectorio = (file: Archivo) => {
    return file.directorio;
  };

  render() {
    const canNavigateBack = this.rootDirectory.padreId != -1;

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

            <h6 class="current-directory">{this.currentPath}</h6>

            <div class="list-group">
              {this.rootDirectory.archivos
                .filter(this.esDirectorio)
                .map((file: Archivo) => (
                  <button
                    key={file.id} // Necesario para evitar optimizaciones no deseadas de StencilJS
                    type="button"
                    class="list-group-item list-group-item-action"
                    onClick={this.navigateToDirectory(file)}
                  >
                    <i
                      aria-hidden="true"
                      class={{
                        "matefun-file": true,
                        "fa": true,
                        "fa-folder": file.directorio,
                        "fa-file-text": !file.directorio
                      }}
                    ></i>
                    {file.nombre}
                  </button>
                ))}
            </div>

            {this.import && (
              <div class="form-group">
                <label htmlFor="file-name" class="form-control-label">
                  {this.importLabel}
                </label>
                <input
                  id="fileid"
                  type="file"
                  // (change)="changeListener($event)"
                  // #input
                />
              </div>
            )}
          </div>

          <button
            slot="primary-action"
            type="button"
            class="btn btn-primary"
            disabled={
              this.fileNameIsEmpty || (this.import && this.fileContent == "")
            }
            onClick={this.confirmFile}
          >
            {this.confirmLabel}
          </button>

          {canNavigateBack && (
            <button
              slot="secondary-action"
              type="button"
              class="btn btn-default"
              onClick={this.navigateBack}
            >
              {this.navigateBackLabel}
            </button>
          )}
        </matefun-modal>
      </Host>
    );
  }
}
