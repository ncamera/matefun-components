import { Component, Event, EventEmitter, Host, Prop, h } from "@stencil/core";

@Component({
  tag: "matefun-modal-borrar-archivo",
  styleUrl: "modal-borrar-archivo.scss",
  shadow: false
})
export class ModalBorrarArchivo {
  /**
   * Texto descriptivo del mensaje del body.
   */
  @Prop() bodyDescription: string;

  /**
   * Texto del label asociado al button de cancelar la eliminación del archivo.
   */
  @Prop() cancelLabel: string;

  /**
   * Texto del label asociado al button de confirmar la creación del archivo.
   */
  @Prop() confirmLabel: string;

  /**
   * El título del modal.
   */
  @Prop() header: string;

  /**
   * `true` si el modal está abierto.
   */
  @Prop() opened = false;

  /**
   * Se dispara cuando se cancela la eliminación del archivo.
   */
  @Event() cancelAction: EventEmitter<any>;

  /**
   * Se dispara cuando se confirma la eliminación del archivo del directorio actual.
   */
  @Event() removeFile: EventEmitter<any>;

  private removeSelectedFile = (event: UIEvent) => {
    event.stopPropagation();
    this.removeFile.emit();
  };

  private cancel = (event: UIEvent) => {
    event.stopPropagation();
    this.cancelAction.emit();
  };

  render() {
    return (
      <Host>
        <matefun-modal opened={this.opened}>
          <span slot="header">{this.header}</span>

          <span slot="body" class="stretch-width">
            {this.bodyDescription}
          </span>

          <button
            slot="primary-action"
            type="button"
            class="btn btn-success"
            onClick={this.removeSelectedFile}
          >
            {this.confirmLabel}
          </button>

          <button
            slot="secondary-action"
            type="button"
            class="btn btn-default"
            onClick={this.cancel}
          >
            {this.cancelLabel}
          </button>
        </matefun-modal>
      </Host>
    );
  }
}
