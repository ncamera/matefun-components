import {
  Component,
  Event,
  EventEmitter,
  Host,
  Prop,
  State,
  h
} from "@stencil/core";

import { Grupo } from "../../common/interfaces";

/**
 * Dado un grupo computa y devuelve el id asociado al mismo.
 * @param group Grupo Matefun
 * @returns El ID del grupo
 */
const getGroupId = (group: Grupo) =>
  group.anio + group.grado + group.grupo + group.liceoId;

@Component({
  tag: "matefun-modal-compartir-archivo",
  styleUrl: "modal-compartir-archivo.scss",
  shadow: false
})
export class ModalCompartirArchivo {
  /**
   * Grupo seleccionado para compartir el archivo
   */
  private selectedGroup: Grupo;

  /**
   * Id del grupo seleccionado para compartir el archivo
   */
  @State() selectedGroupId: string = "";

  /**
   * Texto del label asociado al button de confirmar la operación de compartir
   * el archivo.
   */
  @Prop() confirmLabel: string;

  /**
   * Grupos a los cuales se les puede compartir el archivo selecciondo.
   */
  @Prop() groups: Grupo[];

  /**
   * El título del modal.
   */
  @Prop() header: string;

  /**
   * `true` si el modal está abierto.
   */
  @Prop() opened = false;

  /**
   * Se dispara cuando se confirma la operación de compartir el archivo con
   * el grupo seleccionado.
   */
  @Event() confirmFileShare: EventEmitter<Grupo>;

  private confirmFile = () => {
    this.confirmFileShare.emit(this.selectedGroup);
  };

  private updateSelectedGroup = (group: Grupo) => () => {
    this.selectedGroupId = getGroupId(group);
    this.selectedGroup = group;
  };

  render() {
    return (
      <Host>
        <matefun-modal opened={this.opened}>
          <span slot="header">{this.header}</span>

          <div slot="body" class="stretch-width">
            <div class="list-group scroll-on-overflow">
              {this.groups.map((group: Grupo) => (
                <button
                  key={getGroupId(group)} // Necesario para evitar optimizaciones no deseadas de StencilJS
                  type="button"
                  class={{
                    "list-group-item list-group-item-action": true,
                    "active": this.selectedGroupId == getGroupId(group)
                  }}
                  onClick={this.updateSelectedGroup(group)}
                >
                  <i class="fa fa-group matefun-group" aria-hidden="true"></i>
                  {group.grado + "°" + group.grupo + " - " + group.anio}
                </button>
              ))}
            </div>
          </div>

          <button
            slot="primary-action"
            type="button"
            class="btn btn-primary"
            disabled={this.selectedGroupId === ""}
            onClick={this.selectedGroupId !== "" ? this.confirmFile : undefined}
          >
            {this.confirmLabel}
          </button>
        </matefun-modal>
      </Host>
    );
  }
}
