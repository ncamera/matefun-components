import { Component, Event, EventEmitter, Host, Prop, h } from "@stencil/core";

@Component({
  tag: "matefun-modal-enviar-archivo",
  styleUrl: "modal-enviar-archivo.scss",
  shadow: false
})
export class ModalEnviarArchivo {
  /**
   * Texto descriptivo del mensaje del body que va en la parte inferior del
   * mismo.
   */
  @Prop() bodyDescriptionBottom: string;

  /**
   * Texto descriptivo del mensaje del body que va en la parte superior del
   * mismo.
   */
  @Prop() bodyDescriptionTop: string;

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

          <div slot="body" class="stretch-width">
            {this.bodyDescriptionTop}
            <br />

            <span class="matefun-underline">{this.bodyDescriptionBottom}</span>
          </div>

          <button
            slot="secondary-action"
            type="button"
            class="btn btn-primary"
            onClick={this.sendFile}
          >
            {this.confirmLabel}
          </button>

          <button
            slot="primary-action"
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
