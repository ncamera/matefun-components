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

  /**
   * Directorio actual sobre el cual se están visualizando sus archivos.
   */
  @Prop() currentDirectory: Archivo = null;

  /**
   * Path (ruta) inicial en donde se encuentra el directorio indicado por la propiedad `currentDirectory`.
   */
  @Prop() initialPath: string = "/";

  @Prop() fileContent: string;

  /**
   * Id del archivo a mover. Esta propiedad solo aplica cuando
   * `typeOfModal` == `"move"`, y permite evitar mover una carpeta para algunos
   * de sus subdirectorios, evitando así un ciclo en el árbol de directorios.
   */
  @Prop() fileIdToMove: number = -1;

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
   * Determina la funcionalidad final del modal.
   *  * `"add"`: Modal para agregar un archivo. Permite recorrer el árbol de
   *    directorios y muestra un dialogo adicional para especificar el nombre
   *    del archivo a agregar.
   *
   *  * `"move"`: Modal para mover un archivo/carpeta. Solo se permte recorrer
   *    el árbol de directorios.
   */
  @Prop() typeOfModal: "add" | "move" = "add";

  /**
   * `true` si el modal está abierto.
   */
  @Prop() opened = false;

  /**
   * Se dispara cuando se confirma la operación de crear o mover el archivo
   * sobre el directorio actual.
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

    const lastDirectoryIndex = this.currentPath.lastIndexOf(
      `${this.currentDirectory.nombre}`
    );
    this.currentPath = this.currentPath.substring(0, lastDirectoryIndex);

    this.navBack.emit(this.currentDirectory);
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
   * Emite el evento de confirmación del archivo a crear o mover.
   *  - Si el archivo se debe crear, se retorna el nombre del archivo y el ID
   *    del directorio padre del archivo a crear.
   *  - Si el archivo se debe mover, se retorna el ID del directorio padre a
   *    donde se desea mover el archivo.
   */
  private confirmFile = () => {
    const detail =
      this.typeOfModal == "add"
        ? {
            nombre: this.fileNameToAdd,
            padreId: this.currentDirectory.id
          }
        : {
            padreId: this.currentDirectory.id
          };

    this.confirmFileCreation.emit(detail);
  };

  private esDirectorio = (file: Archivo) =>
    file.directorio && this.fileIdToMove != file.padreId;

  componentWillLoad() {
    this.currentPath = this.initialPath;
  }

  render() {
    const canNavigateBack = this.currentDirectory.padreId != -1;

    return (
      <Host>
        <matefun-modal opened={this.opened}>
          <span slot="header">{this.header}</span>

          <div slot="body" class="stretch-width">
            {this.typeOfModal == "add" && (
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
            )}

            <h6 class="current-directory">{this.currentPath}</h6>

            <div class="list-group scroll-on-overflow">
              {this.currentDirectory.archivos
                .filter(this.esDirectorio)
                .map((file: Archivo) => (
                  <button
                    key={file.id} // Necesario para evitar optimizaciones no deseadas de StencilJS
                    type="button"
                    disabled={file.id == this.fileIdToMove}
                    class="list-group-item list-group-item-action"
                    onClick={
                      file.id !== this.fileIdToMove
                        ? this.navigateToDirectory(file)
                        : undefined // No se agrega un handler si el directorio es el que se está moviendo
                    }
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
              this.typeOfModal == "add" &&
              (this.fileNameIsEmpty || (this.import && this.fileContent == ""))
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
