import {
  Component,
  Element,
  Event,
  EventEmitter,
  Prop,
  Watch,
  h,
  Host,
  State
} from "@stencil/core";

const WAIT_TO_REMOVE_MODAL = 320; // 320ms
const headerId = "header";

@Component({
  shadow: true,
  styleUrl: "modal.scss",
  tag: "matefun-modal"
})
export class Modal {
  private dismissTimer: NodeJS.Timeout = null;

  @Element() element: Element;

  /**
   * This attribute lets you specify the label for the close button. Important for accessibility.
   */
  @Prop() readonly closeButtonLabel: string;

  /**
   * This attribute lets you specify the height of the control.
   */
  @Prop() readonly height: string = null;

  /**
   * Este atributo permite especificar si el modal está abierto o cerrado.
   */
  @Prop({ mutable: true }) opened = false;

  /**
   * This attribute lets you specify if a body is rendered in the middle of the modal dialog.
   */
  @Prop() readonly showBody: boolean = true;

  /**
   * This attribute lets you specify if a footer is rendered at the bottom of the modal dialog.
   */
  @Prop() readonly showFooter: boolean = true;

  /**
   * This attribute lets you specify if a header is rendered on top of the modal dialog.
   */
  @Prop() readonly showHeader: boolean = true;

  /**
   * This attribute lets you specify the width of the control.
   */
  @Prop() readonly width: string = null;

  /**
   *  Se dispara cuando se cierra el dialogo modal
   */
  @Event() close: EventEmitter;

  /**
   * Se dispara cuando se abre el dialogo modal
   */
  @Event() open: EventEmitter;

  @State() presented: boolean;

  @Watch("opened")
  openedHandler(newValue: boolean, oldValue = false) {
    if (newValue === oldValue) {
      return;
    }

    if (newValue) {
      clearTimeout(this.dismissTimer);
      this.presented = true;

      // Emite el evento
      this.open.emit();
    } else {
      this.dismissTimer = setTimeout(() => {
        this.presented = false;

        // Emite el evento después de que la animación de dismiss ha finalizado
        this.close.emit();
      }, WAIT_TO_REMOVE_MODAL);
    }
  }

  private closeModal = (e: UIEvent) => {
    e.stopPropagation();

    if (!this.opened) {
      return;
    }
    this.opened = false;
  };

  private stopPropagation = (e: UIEvent) => {
    e.stopPropagation();
  };

  disconnectedCallback() {
    clearTimeout(this.dismissTimer);
  }

  componentWillLoad() {
    this.presented = this.opened;
    console.log("Hola", this.presented);
  }

  componentDidLoad() {
    // The modal might be opened when it is first rendered, due to in some
    // cases it was open when the UI was refreshed.
    if (this.opened) {
      this.open.emit();
    }
  }

  render() {
    return (
      <Host
        class={{
          "presented": this.presented,
          "dismiss-animation": !this.opened
        }}
        onClick={this.closeModal}
      >
        {this.presented && (
          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby={this.showHeader ? headerId : undefined}
            tabindex="-1"
            part="dialog"
            class="matefun-modal-dialog"
            style={{
              "width": this.width,
              "height": this.height,
              "min-width": this.width
            }}
            onClick={this.stopPropagation}
          >
            <div role="document" tabindex="0" class="matefun-modal-content">
              {this.showHeader && (
                <div part="header" class="header">
                  <h6 id={headerId}>
                    <slot name="header" />
                  </h6>
                  <button
                    aria-label={this.closeButtonLabel}
                    part="close-button"
                    class="close-button"
                    type="button"
                    onClick={this.closeModal}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14 14">
                      <path d="M13 1L1 13" class="vector" />
                      <path d="M1 1L13 13" class="vector" />
                    </svg>
                  </button>
                </div>
              )}
              {this.showBody && (
                <div part="body" class="body">
                  <slot name="body" />
                </div>
              )}
              {this.showFooter && (
                <div part="footer" class="footer">
                  <slot name="secondary-action" />
                  <slot name="primary-action" />
                </div>
              )}
            </div>
          </div>
        )}
      </Host>
    );
  }
}
