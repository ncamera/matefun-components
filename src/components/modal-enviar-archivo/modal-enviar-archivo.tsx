import { Component, Event, EventEmitter, Host, Prop, h } from "@stencil/core";

@Component({
  tag: "matefun-modal-enviar-archivo",
  styleUrl: "modal-enviar-archivo.scss",
  shadow: false
})
export class ModalEnviarArchivo {
  /**
   * Texto descriptivo del mensaje del body.
   */
  @Prop() bodyDescription: string;

  /**
   * Texto del label asociado al button de cancelar el envío del archivo.
   */
  @Prop() cancelLabel: string;

  /**
   * Texto del label asociado al button de confirmar el envío del archivo.
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
   * Se dispara cuando se cancela el envío del archivo.
   */
  @Event() cancelAction: EventEmitter<any>;

  /**
   * Se dispara cuando se confirma el envío del archivo.
   */
  @Event() confirmFileSend: EventEmitter<any>;

  private sendFile = (event: UIEvent) => {
    event.stopPropagation();
    this.confirmFileSend.emit();
  };

  private cancel = (event: UIEvent) => {
    event.stopPropagation();
    this.cancelAction.emit();
  };

  render() {
    return (
      <Host>
        <matefun-modal opened={this.opened}>
          <h4 slot="header" class="matefun-send-file">
            {this.header}
          </h4>

          <span slot="body" class="stretch-width">
            {this.bodyDescription}
          </span>

          <button
            slot="primary-action"
            type="button"
            class="btn btn-success"
            onClick={this.sendFile}
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
