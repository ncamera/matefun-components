/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
import { Archivo, Grupo } from "./common/interfaces";
export namespace Components {
    interface MatefunModal {
        /**
          * This attribute lets you specify the label for the close button. Important for accessibility.
         */
        "closeButtonLabel": string;
        /**
          * This attribute lets you specify the height of the control.
         */
        "height": string;
        /**
          * Este atributo permite especificar si el modal está abierto o cerrado.
         */
        "opened": boolean;
        /**
          * This attribute lets you specify if a body is rendered in the middle of the modal dialog.
         */
        "showBody": boolean;
        /**
          * This attribute lets you specify if a footer is rendered at the bottom of the modal dialog.
         */
        "showFooter": boolean;
        /**
          * This attribute lets you specify if a header is rendered on top of the modal dialog.
         */
        "showHeader": boolean;
        /**
          * This attribute lets you specify the width of the control.
         */
        "width": string;
    }
    interface MatefunModalBorrarArchivo {
        /**
          * Texto descriptivo del mensaje del body.
         */
        "bodyDescription": string;
        /**
          * Texto del label asociado al button de cancelar la eliminación del archivo.
         */
        "cancelLabel": string;
        /**
          * Texto del label asociado al button de confirmar la creación del archivo.
         */
        "confirmLabel": string;
        /**
          * El título del modal.
         */
        "header": string;
        /**
          * `true` si el modal está abierto.
         */
        "opened": boolean;
    }
    interface MatefunModalCompartirArchivo {
        /**
          * Texto del label asociado al button de confirmar la operación de compartir el archivo.
         */
        "confirmLabel": string;
        /**
          * Grupos a los cuales se les puede compartir el archivo selecciondo.
         */
        "groups": Grupo[];
        /**
          * El título del modal.
         */
        "header": string;
        /**
          * `true` si el modal está abierto.
         */
        "opened": boolean;
    }
    interface MatefunModalEnviarArchivo {
        /**
          * Texto descriptivo del mensaje del body que va en la parte inferior del mismo.
         */
        "bodyDescriptionBottom": string;
        /**
          * Texto descriptivo del mensaje del body que va en la parte superior del mismo.
         */
        "bodyDescriptionTop": string;
        /**
          * Texto del label asociado al button de cancelar el envío del archivo.
         */
        "cancelLabel": string;
        /**
          * Texto del label asociado al button de confirmar el envío del archivo.
         */
        "confirmLabel": string;
        /**
          * El título del modal.
         */
        "header": string;
        /**
          * `true` si el modal está abierto.
         */
        "opened": boolean;
    }
    interface MatefunModalNuevoArchivo {
        /**
          * Texto del label asociado al button de confirmar la creación del archivo.
         */
        "confirmLabel": string;
        /**
          * Texto del label asociado al input para ingresar la descripción del nuevo archivo.
         */
        "fileDescriptionLabel": string;
        /**
          * Texto del label asociado al input para ingresar el nombre del nuevo archivo.
         */
        "fileNameLabel": string;
        /**
          * El título del modal.
         */
        "header": string;
        /**
          * `true` si el modal está abierto.
         */
        "opened": boolean;
        /**
          * Determina si el archivo a agregar es un directorio o un archivo.
         */
        "typeOfFile": "directory" | "file";
    }
    interface MatefunModalSeleccionarDirectorio {
        /**
          * Texto del label asociado al button de confirmar la creación del archivo.
         */
        "confirmLabel": string;
        /**
          * Directorio actual sobre el cual se están visualizando sus archivos.
         */
        "currentDirectory": Archivo;
        "fileContent": string;
        /**
          * Id del archivo a mover. Esta propiedad solo aplica cuando `typeOfModal` == `"move"`, y permite evitar mover una carpeta para algunos de sus subdirectorios, evitando así un ciclo en el árbol de directorios.
         */
        "fileIdToMove": number;
        /**
          * Texto del label asociado al input para ingresar el nombre del nuevo archivo.
         */
        "fileNameLabel": string;
        /**
          * El título del modal.
         */
        "header": string;
        "import": boolean;
        "importLabel": string;
        /**
          * Path (ruta) inicial en donde se encuentra el directorio indicado por la propiedad `currentDirectory`.
         */
        "initialPath": string;
        /**
          * Texto asociado al botón de navegar hacia atrás.
         */
        "navigateBackLabel": string;
        /**
          * `true` si el modal está abierto.
         */
        "opened": boolean;
        /**
          * Determina la funcionalidad final del modal.  * `"add"`: Modal para agregar un archivo. Permite recorrer el árbol de    directorios y muestra un dialogo adicional para especificar el nombre    del archivo a agregar.   * `"move"`: Modal para mover un archivo/carpeta. Solo se permte recorrer    el árbol de directorios.
         */
        "typeOfModal": "add" | "move";
    }
    interface MatefunModalVerCalificacion {
        /**
          * Texto del label asociado al button de confirmar cerrar el modal.
         */
        "confirmLabel": string;
        /**
          * Texto descriptivo del mensaje del body que va en la fecha.
         */
        "date": string;
        /**
          * Texto descriptivo del mensaje del body que va en el label de la fecha.
         */
        "dateLabel": string;
        /**
          * Texto descriptivo del mensaje del body que va en el detalle.
         */
        "detail": string;
        /**
          * Texto descriptivo del mensaje del body que va en el label del detalle.
         */
        "detailLabel": string;
        /**
          * El título del modal.
         */
        "header": string;
        /**
          * `true` si el modal está abierto.
         */
        "opened": boolean;
        /**
          * Texto descriptivo del mensaje del body que va en el puntaje.
         */
        "score": string;
        /**
          * Texto descriptivo del mensaje del body que va en el label del puntaje.
         */
        "scoreLabel": string;
    }
}
export interface MatefunModalCustomEvent<T> extends CustomEvent<T> {
    detail: T;
    target: HTMLMatefunModalElement;
}
export interface MatefunModalBorrarArchivoCustomEvent<T> extends CustomEvent<T> {
    detail: T;
    target: HTMLMatefunModalBorrarArchivoElement;
}
export interface MatefunModalCompartirArchivoCustomEvent<T> extends CustomEvent<T> {
    detail: T;
    target: HTMLMatefunModalCompartirArchivoElement;
}
export interface MatefunModalEnviarArchivoCustomEvent<T> extends CustomEvent<T> {
    detail: T;
    target: HTMLMatefunModalEnviarArchivoElement;
}
export interface MatefunModalNuevoArchivoCustomEvent<T> extends CustomEvent<T> {
    detail: T;
    target: HTMLMatefunModalNuevoArchivoElement;
}
export interface MatefunModalSeleccionarDirectorioCustomEvent<T> extends CustomEvent<T> {
    detail: T;
    target: HTMLMatefunModalSeleccionarDirectorioElement;
}
export interface MatefunModalVerCalificacionCustomEvent<T> extends CustomEvent<T> {
    detail: T;
    target: HTMLMatefunModalVerCalificacionElement;
}
declare global {
    interface HTMLMatefunModalElement extends Components.MatefunModal, HTMLStencilElement {
    }
    var HTMLMatefunModalElement: {
        prototype: HTMLMatefunModalElement;
        new (): HTMLMatefunModalElement;
    };
    interface HTMLMatefunModalBorrarArchivoElement extends Components.MatefunModalBorrarArchivo, HTMLStencilElement {
    }
    var HTMLMatefunModalBorrarArchivoElement: {
        prototype: HTMLMatefunModalBorrarArchivoElement;
        new (): HTMLMatefunModalBorrarArchivoElement;
    };
    interface HTMLMatefunModalCompartirArchivoElement extends Components.MatefunModalCompartirArchivo, HTMLStencilElement {
    }
    var HTMLMatefunModalCompartirArchivoElement: {
        prototype: HTMLMatefunModalCompartirArchivoElement;
        new (): HTMLMatefunModalCompartirArchivoElement;
    };
    interface HTMLMatefunModalEnviarArchivoElement extends Components.MatefunModalEnviarArchivo, HTMLStencilElement {
    }
    var HTMLMatefunModalEnviarArchivoElement: {
        prototype: HTMLMatefunModalEnviarArchivoElement;
        new (): HTMLMatefunModalEnviarArchivoElement;
    };
    interface HTMLMatefunModalNuevoArchivoElement extends Components.MatefunModalNuevoArchivo, HTMLStencilElement {
    }
    var HTMLMatefunModalNuevoArchivoElement: {
        prototype: HTMLMatefunModalNuevoArchivoElement;
        new (): HTMLMatefunModalNuevoArchivoElement;
    };
    interface HTMLMatefunModalSeleccionarDirectorioElement extends Components.MatefunModalSeleccionarDirectorio, HTMLStencilElement {
    }
    var HTMLMatefunModalSeleccionarDirectorioElement: {
        prototype: HTMLMatefunModalSeleccionarDirectorioElement;
        new (): HTMLMatefunModalSeleccionarDirectorioElement;
    };
    interface HTMLMatefunModalVerCalificacionElement extends Components.MatefunModalVerCalificacion, HTMLStencilElement {
    }
    var HTMLMatefunModalVerCalificacionElement: {
        prototype: HTMLMatefunModalVerCalificacionElement;
        new (): HTMLMatefunModalVerCalificacionElement;
    };
    interface HTMLElementTagNameMap {
        "matefun-modal": HTMLMatefunModalElement;
        "matefun-modal-borrar-archivo": HTMLMatefunModalBorrarArchivoElement;
        "matefun-modal-compartir-archivo": HTMLMatefunModalCompartirArchivoElement;
        "matefun-modal-enviar-archivo": HTMLMatefunModalEnviarArchivoElement;
        "matefun-modal-nuevo-archivo": HTMLMatefunModalNuevoArchivoElement;
        "matefun-modal-seleccionar-directorio": HTMLMatefunModalSeleccionarDirectorioElement;
        "matefun-modal-ver-calificacion": HTMLMatefunModalVerCalificacionElement;
    }
}
declare namespace LocalJSX {
    interface MatefunModal {
        /**
          * This attribute lets you specify the label for the close button. Important for accessibility.
         */
        "closeButtonLabel"?: string;
        /**
          * This attribute lets you specify the height of the control.
         */
        "height"?: string;
        /**
          * Se dispara cuando se cierra el dialogo modal
         */
        "onClose"?: (event: MatefunModalCustomEvent<any>) => void;
        /**
          * Se dispara cuando se abre el dialogo modal
         */
        "onOpen"?: (event: MatefunModalCustomEvent<any>) => void;
        /**
          * Este atributo permite especificar si el modal está abierto o cerrado.
         */
        "opened"?: boolean;
        /**
          * This attribute lets you specify if a body is rendered in the middle of the modal dialog.
         */
        "showBody"?: boolean;
        /**
          * This attribute lets you specify if a footer is rendered at the bottom of the modal dialog.
         */
        "showFooter"?: boolean;
        /**
          * This attribute lets you specify if a header is rendered on top of the modal dialog.
         */
        "showHeader"?: boolean;
        /**
          * This attribute lets you specify the width of the control.
         */
        "width"?: string;
    }
    interface MatefunModalBorrarArchivo {
        /**
          * Texto descriptivo del mensaje del body.
         */
        "bodyDescription"?: string;
        /**
          * Texto del label asociado al button de cancelar la eliminación del archivo.
         */
        "cancelLabel"?: string;
        /**
          * Texto del label asociado al button de confirmar la creación del archivo.
         */
        "confirmLabel"?: string;
        /**
          * El título del modal.
         */
        "header"?: string;
        /**
          * Se dispara cuando se cancela la eliminación del archivo.
         */
        "onCancelAction"?: (event: MatefunModalBorrarArchivoCustomEvent<any>) => void;
        /**
          * Se dispara cuando se confirma la eliminación del archivo del directorio actual.
         */
        "onRemoveFile"?: (event: MatefunModalBorrarArchivoCustomEvent<any>) => void;
        /**
          * `true` si el modal está abierto.
         */
        "opened"?: boolean;
    }
    interface MatefunModalCompartirArchivo {
        /**
          * Texto del label asociado al button de confirmar la operación de compartir el archivo.
         */
        "confirmLabel"?: string;
        /**
          * Grupos a los cuales se les puede compartir el archivo selecciondo.
         */
        "groups"?: Grupo[];
        /**
          * El título del modal.
         */
        "header"?: string;
        /**
          * Se dispara cuando se confirma la operación de compartir el archivo con el grupo seleccionado.
         */
        "onConfirmFileShare"?: (event: MatefunModalCompartirArchivoCustomEvent<Grupo>) => void;
        /**
          * `true` si el modal está abierto.
         */
        "opened"?: boolean;
    }
    interface MatefunModalEnviarArchivo {
        /**
          * Texto descriptivo del mensaje del body que va en la parte inferior del mismo.
         */
        "bodyDescriptionBottom"?: string;
        /**
          * Texto descriptivo del mensaje del body que va en la parte superior del mismo.
         */
        "bodyDescriptionTop"?: string;
        /**
          * Texto del label asociado al button de cancelar el envío del archivo.
         */
        "cancelLabel"?: string;
        /**
          * Texto del label asociado al button de confirmar el envío del archivo.
         */
        "confirmLabel"?: string;
        /**
          * El título del modal.
         */
        "header"?: string;
        /**
          * Se dispara cuando se cancela el envío del archivo.
         */
        "onCancelAction"?: (event: MatefunModalEnviarArchivoCustomEvent<any>) => void;
        /**
          * Se dispara cuando se confirma el envío del archivo.
         */
        "onConfirmFileSend"?: (event: MatefunModalEnviarArchivoCustomEvent<any>) => void;
        /**
          * `true` si el modal está abierto.
         */
        "opened"?: boolean;
    }
    interface MatefunModalNuevoArchivo {
        /**
          * Texto del label asociado al button de confirmar la creación del archivo.
         */
        "confirmLabel"?: string;
        /**
          * Texto del label asociado al input para ingresar la descripción del nuevo archivo.
         */
        "fileDescriptionLabel"?: string;
        /**
          * Texto del label asociado al input para ingresar el nombre del nuevo archivo.
         */
        "fileNameLabel"?: string;
        /**
          * El título del modal.
         */
        "header"?: string;
        /**
          * Se dispara cuando se confirma la creación del archivo en el directorio actual.
         */
        "onConfirmFileCreation"?: (event: MatefunModalNuevoArchivoCustomEvent<any>) => void;
        /**
          * `true` si el modal está abierto.
         */
        "opened"?: boolean;
        /**
          * Determina si el archivo a agregar es un directorio o un archivo.
         */
        "typeOfFile"?: "directory" | "file";
    }
    interface MatefunModalSeleccionarDirectorio {
        /**
          * Texto del label asociado al button de confirmar la creación del archivo.
         */
        "confirmLabel"?: string;
        /**
          * Directorio actual sobre el cual se están visualizando sus archivos.
         */
        "currentDirectory"?: Archivo;
        "fileContent"?: string;
        /**
          * Id del archivo a mover. Esta propiedad solo aplica cuando `typeOfModal` == `"move"`, y permite evitar mover una carpeta para algunos de sus subdirectorios, evitando así un ciclo en el árbol de directorios.
         */
        "fileIdToMove"?: number;
        /**
          * Texto del label asociado al input para ingresar el nombre del nuevo archivo.
         */
        "fileNameLabel"?: string;
        /**
          * El título del modal.
         */
        "header"?: string;
        "import"?: boolean;
        "importLabel"?: string;
        /**
          * Path (ruta) inicial en donde se encuentra el directorio indicado por la propiedad `currentDirectory`.
         */
        "initialPath"?: string;
        /**
          * Texto asociado al botón de navegar hacia atrás.
         */
        "navigateBackLabel"?: string;
        /**
          * Se dispara cuando se confirma la operación de crear o mover el archivo sobre el directorio actual.
         */
        "onConfirmFileCreation"?: (event: MatefunModalSeleccionarDirectorioCustomEvent<any>) => void;
        /**
          * Se dispara cuando se quiere navegar hacia el directorio padre.
         */
        "onNavBack"?: (event: MatefunModalSeleccionarDirectorioCustomEvent<any>) => void;
        /**
          * Se dispara cuando se quiere navegar hacia un subdirectorio.
         */
        "onNavTo"?: (event: MatefunModalSeleccionarDirectorioCustomEvent<any>) => void;
        /**
          * `true` si el modal está abierto.
         */
        "opened"?: boolean;
        /**
          * Determina la funcionalidad final del modal.  * `"add"`: Modal para agregar un archivo. Permite recorrer el árbol de    directorios y muestra un dialogo adicional para especificar el nombre    del archivo a agregar.   * `"move"`: Modal para mover un archivo/carpeta. Solo se permte recorrer    el árbol de directorios.
         */
        "typeOfModal"?: "add" | "move";
    }
    interface MatefunModalVerCalificacion {
        /**
          * Texto del label asociado al button de confirmar cerrar el modal.
         */
        "confirmLabel"?: string;
        /**
          * Texto descriptivo del mensaje del body que va en la fecha.
         */
        "date"?: string;
        /**
          * Texto descriptivo del mensaje del body que va en el label de la fecha.
         */
        "dateLabel"?: string;
        /**
          * Texto descriptivo del mensaje del body que va en el detalle.
         */
        "detail"?: string;
        /**
          * Texto descriptivo del mensaje del body que va en el label del detalle.
         */
        "detailLabel"?: string;
        /**
          * El título del modal.
         */
        "header"?: string;
        /**
          * Se dispara cuando se confirma el cerrado del modal.
         */
        "onConfirmClose"?: (event: MatefunModalVerCalificacionCustomEvent<any>) => void;
        /**
          * `true` si el modal está abierto.
         */
        "opened"?: boolean;
        /**
          * Texto descriptivo del mensaje del body que va en el puntaje.
         */
        "score"?: string;
        /**
          * Texto descriptivo del mensaje del body que va en el label del puntaje.
         */
        "scoreLabel"?: string;
    }
    interface IntrinsicElements {
        "matefun-modal": MatefunModal;
        "matefun-modal-borrar-archivo": MatefunModalBorrarArchivo;
        "matefun-modal-compartir-archivo": MatefunModalCompartirArchivo;
        "matefun-modal-enviar-archivo": MatefunModalEnviarArchivo;
        "matefun-modal-nuevo-archivo": MatefunModalNuevoArchivo;
        "matefun-modal-seleccionar-directorio": MatefunModalSeleccionarDirectorio;
        "matefun-modal-ver-calificacion": MatefunModalVerCalificacion;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "matefun-modal": LocalJSX.MatefunModal & JSXBase.HTMLAttributes<HTMLMatefunModalElement>;
            "matefun-modal-borrar-archivo": LocalJSX.MatefunModalBorrarArchivo & JSXBase.HTMLAttributes<HTMLMatefunModalBorrarArchivoElement>;
            "matefun-modal-compartir-archivo": LocalJSX.MatefunModalCompartirArchivo & JSXBase.HTMLAttributes<HTMLMatefunModalCompartirArchivoElement>;
            "matefun-modal-enviar-archivo": LocalJSX.MatefunModalEnviarArchivo & JSXBase.HTMLAttributes<HTMLMatefunModalEnviarArchivoElement>;
            "matefun-modal-nuevo-archivo": LocalJSX.MatefunModalNuevoArchivo & JSXBase.HTMLAttributes<HTMLMatefunModalNuevoArchivoElement>;
            "matefun-modal-seleccionar-directorio": LocalJSX.MatefunModalSeleccionarDirectorio & JSXBase.HTMLAttributes<HTMLMatefunModalSeleccionarDirectorioElement>;
            "matefun-modal-ver-calificacion": LocalJSX.MatefunModalVerCalificacion & JSXBase.HTMLAttributes<HTMLMatefunModalVerCalificacionElement>;
        }
    }
}
