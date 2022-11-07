import { Component, Event, EventEmitter, Host, Prop, h } from "@stencil/core";

@Component({
  tag: "matefun-modal-ver-calificacion",
  styleUrl: "modal-ver-calificacion.scss",
  shadow: false
})
export class ModalVerArchivo {
  /**
   * Texto del label asociado al button de confirmar cerrar el modal.
   */
  @Prop() confirmLabel: string;

  /**
   * Texto descriptivo del mensaje del body que va en el detalle.
   */
  @Prop() detail: string;

  /**
   * Texto descriptivo del mensaje del body que va en el label del detalle.
   */
  @Prop() detailLabel: string;

  /**
   * Texto descriptivo del mensaje del body que va en la fecha.
   */
  @Prop() date: string;

  /**
   * Texto descriptivo del mensaje del body que va en el label de la fecha.
   */
  @Prop() dateLabel: string;

  /**
   * El título del modal.
   */
  @Prop() header: string;

  /**
   * `true` si el modal está abierto.
   */
  @Prop() opened = false;

  /**
   * Texto descriptivo del mensaje del body que va en el puntaje.
   */
  @Prop() score: string;

  /**
   * Texto descriptivo del mensaje del body que va en el label del puntaje.
   */
  @Prop() scoreLabel: string;

  /**
   * Se dispara cuando se confirma el cerrado del modal.
   */
  @Event() confirmClose: EventEmitter<any>;

  private closeModal = (event: UIEvent) => {
    event.stopPropagation();
    this.confirmClose.emit();
  };

  render() {
    return (
      <Host>
        <matefun-modal opened={this.opened}>
          <span slot="header">{this.header}</span>

          <div slot="body" class="stretch-width">
            <div>
              <label>
                <b>{this.dateLabel}</b>
              </label>
              {this.date}
            </div>

            <div>
              <label>
                <b>{this.scoreLabel}</b>
              </label>
              {this.score}
            </div>

            <div>
              <label>
                <b>{this.detailLabel}</b>
              </label>
              {this.detail}
            </div>
          </div>

          <button
            slot="primary-action"
            type="button"
            class="btn btn-primary"
            onClick={this.closeModal}
          >
            {this.confirmLabel}
          </button>
        </matefun-modal>
      </Host>
    );
  }
}
