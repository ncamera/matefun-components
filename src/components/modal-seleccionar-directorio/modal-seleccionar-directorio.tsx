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
  private fileNameToAdd: string = "";

  /**
   * `true` si el input con el nombre del archivo a agregar está vacío
   */
  @State() fileNameIsEmpty: boolean = true;

  /**
   * Directorio actual sobre el cual se quiere agregar el archivo
   */
  @State() currentDirectory: Archivo = null;

  /**
   * `true` si puede navegar hacia atrás en la lista de directorios.
   */
  @Prop() canNavigateToBack: boolean;

  /**
   * Texto del label asociado al button de confirmar la creación del archivo.
   */
  @Prop() confirmLabel: string;

  @Prop() fileContent: string;

  /**
   * El título del modal.
   */
  @Prop() header: string;

  /**
   * Este atributo permite especificar si el modal está abierto o cerrado.
   */
  @Prop() opened = false;

  /**
   * Directorio root
   */
  @Prop() rootDirectory: Archivo = null;

  /**
   * Texto del label asociado al input para ingresar el nombre del nuevo archivo.
   */
  @Prop() fileNameLabel: string;

  @Prop() import: boolean = false;

  @Prop() importLabel: string;

  @Prop() navigateBackLabel: string;

  /**
   *  Se dispara cuando se confirma la creación del archivo en el directorio actual.
   */
  @Event() confirmFileCreation: EventEmitter<any>;

  /**
   * Navega hacia el directorio `file`.
   * @param file Directorio al cual se quiere navegar
   */
  private navigateToDirectory = (file: Archivo) => (event: MouseEvent) => {
    event.stopPropagation();

    this.currentDirectory = file;
  };

  private navigateBack = (event: MouseEvent) => {
    event.stopPropagation();
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
      padreId: this.currentDirectory.id
    });
  };

  private esDirectorio = (file: Archivo) => {
    return file.directorio;
  };

  componentWillRender() {
    this.currentDirectory = this.rootDirectory;
  }

  render() {
    return (
      <Host>
        <matefun-modal opened={this.opened}>
          <span slot="header">{this.header}</span>

          <div slot="body" class="stretch-width">
            <label htmlfor="file-name" class="form-control-label">
              {this.fileNameLabel}:
            </label>
            <input
              id="file-name"
              type="text"
              class="form-control"
              value=""
              onInput={this.updateFileName}
            />

            <div class="list-group">
              {this.currentDirectory.archivos
                .filter(this.esDirectorio)
                .forEach((file: Archivo) => (
                  <button
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
                  {this.importLabel}:
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

          {this.canNavigateToBack && (
            <button
              slot="secondary-action"
              type="button"
              class="btn btn-default"
              onClick={this.navigateBack}
            >
              {this.navigateBackLabel}
            </button>
          )}

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
        </matefun-modal>
      </Host>
    );
  }
}
