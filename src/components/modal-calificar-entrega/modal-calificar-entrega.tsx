import { Component, Event, EventEmitter, Host, Prop, h } from "@stencil/core";

export interface Status {
  value: string;
  label: string;
}

@Component({
  tag: "matefun-modal-calificar-entrega",
  styleUrl: "modal-calificar-entrega.scss",
  shadow: false
})
export class ModalCalificarEntrega {
  // Refs
  private detailRef: HTMLTextAreaElement;
  private scoreRef: HTMLInputElement;
  private statusRef: HTMLSelectElement;

  /**
   * Texto del label asociado al button de cancelar el envío del archivo.
   */
  @Prop() cancelLabel: string;

  /**
   * Texto del label asociado al button de confirmar el envío del archivo.
   */
  @Prop() confirmLabel: string;

  /**
   * Descripción asociada a la entrega, en caso de que ya haya sido calificada
   * previamente.
   */
  @Prop() detail: string;

  /**
   * Texto descriptivo del mensaje del body que va en el label del detalle.
   */
  @Prop() detailLabel: string;

  /**
   * El título del modal.
   */
  @Prop() header: string;

  /**
   * `true` si el modal está abierto.
   */
  @Prop() opened = false;

  /**
   * Arreglos de posibles estados de la entrega
   */
  @Prop() posibleStatuses: Status[];

  /**
   * Puntaje asociado a la entrega, en caso de que ya haya sido calificada
   * previamente.
   */
  @Prop() score: string;

  /**
   * Texto descriptivo del mensaje del body que va en el label del puntaje.
   */
  @Prop() scoreLabel: string;

  /**
   * Estado asociado a la entrega, en caso de que ya haya sido calificada
   * previamente.
   */
  @Prop() status: string;

  /**
   * Texto descriptivo del mensaje del body que va en el label del estado de la
   * entrega.
   */
  @Prop() statusLabel: string;

  /**
   * Se dispara cuando se cancela la calificación del archivo.
   */
  @Event() cancelAction: EventEmitter<any>;

  /**
   * Se dispara cuando se confirma la calificación del archivo.
   */
  @Event() confirmFileQualify: EventEmitter<any>;

  private qualifyFile = (event: UIEvent) => {
    event.stopPropagation();

    this.confirmFileQualify.emit({
      descripcion: this.detailRef.value,
      estado: this.statusRef.value,
      nota: this.scoreRef.value
    });
  };

  private cancel = (event: UIEvent) => {
    event.stopPropagation();
    this.cancelAction.emit();
  };

  render() {
    return (
      <Host>
        <matefun-modal opened={this.opened}>
          <h4 slot="header" class="matefun-qualify">
            {this.header}
          </h4>

          <div slot="body" class="stretch-width">
            <div class="form-group">
              <label htmlFor="matefun-score">{this.scoreLabel}</label>
              <input
                id="matefun-score"
                type="number"
                class="form-control"
                value={this.score}
                min="1"
                max="100"
                ref={el => (this.scoreRef = el as HTMLInputElement)}
              />
            </div>

            <div class="form-group">
              <label htmlFor="matefun-detail">{this.detailLabel}</label>
              <textarea
                id="matefun-detail"
                class="form-control"
                value={this.detail}
                ref={el => (this.detailRef = el as HTMLTextAreaElement)}
              ></textarea>
            </div>

            <div class="form-group">
              <label htmlFor="matefun-status">{this.statusLabel}</label>

              <select
                id="matefun-status"
                name="estado"
                class="form-control"
                ref={el => (this.statusRef = el as HTMLSelectElement)}
              >
                {this.posibleStatuses.map((status: Status) => (
                  <option
                    key={status.value} // Necesario para evitar optimizaciones no deseadas de StencilJS
                    value={status.value}
                  >
                    {status.label}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <button
            slot="primary-action"
            type="button"
            class="btn btn-success"
            onClick={this.qualifyFile}
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
