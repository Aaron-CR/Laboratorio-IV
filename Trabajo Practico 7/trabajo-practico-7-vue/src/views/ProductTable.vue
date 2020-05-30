<template>
  <div>
    <b-breadcrumb>
      <b-breadcrumb-item href="/">Home</b-breadcrumb-item>
      <b-breadcrumb-item active>Tabla</b-breadcrumb-item>
    </b-breadcrumb>
    <b-container class="mt-5">
      <b-row class="d-flex justify-content-between">
        <h1>Tabla de Instrumentos</h1>
        <div>
          <b-button variant="primary" v-b-modal.modal @click="setTituloAdd">
            <b-icon icon="plus-circle" aria-hidden="true" class="mr-2"></b-icon>Añadir
          </b-button>
        </div>
      </b-row>
      <div>
        <b-table :items="instrumentosData" :fields="displayColumns" class="mt-3" outlined>
          <template v-slot:cell(actions)="row">
            <b-button
              pill
              size="sm"
              variant="success"
              class="mr-1"
              v-b-tooltip
              title="Editar"
              v-b-modal.modal
              @click="setEditar(row.item)"
            >
              <b-icon icon="pencil" aria-label="Edit"></b-icon>
            </b-button>
            <b-button
              pill
              size="sm"
              variant="danger"
              class="mr-1"
              v-b-tooltip
              title="Eliminar"
              @click="deleteInstrumento(row.item)"
            >
              <b-icon icon="trash" aria-label="Delete"></b-icon>
            </b-button>
          </template>
        </b-table>

        <!-- Ventana modal -->
        <b-modal
          id="modal"
          ref="modal-ref"
          size="lg"
          :title="titulo"
          @hidden="resetModal"
          @ok="handleOk"
        >
          <!-- Formulario -->
          <form ref="form" @submit.stop.prevent="handleSubmit">
            <b-form-group id="nobreInstrumento" label="Nombre:" label-for="instrumento">
              <b-form-input
                id="instrumento"
                type="text"
                v-model="$v.instrumentoActual.instrumento.$model"
                :state="validateState('instrumento')"
                placeholder="Ingrese el nombre del instrumento..."
                required
              ></b-form-input>
              <b-form-invalid-feedback id="input-1-live-feedback">¡Este campo es requerido!</b-form-invalid-feedback>
            </b-form-group>
            <b-row>
              <b-col>
                <b-form-group id="marcaInstrumento" label="Marca:" label-for="marca">
                  <b-form-input
                    id="marca"
                    type="text"
                    v-model="$v.instrumentoActual.marca.$model"
                    :state="validateState('marca')"
                    placeholder="Ingrese la marca del instrumento..."
                    required
                  ></b-form-input>
                  <b-form-invalid-feedback id="input-1-live-feedback">¡Este campo es requerido!</b-form-invalid-feedback>
                </b-form-group>
              </b-col>
              <b-col>
                <b-form-group id="modeloInstrumento" label="Modelo" label-for="modelo">
                  <b-form-input
                    id="modelo"
                    type="text"
                    v-model="$v.instrumentoActual.modelo.$model"
                    :state="validateState('modelo')"
                    placeholder="Ingrese el modelo del instrumento..."
                    required
                  ></b-form-input>
                  <b-form-invalid-feedback id="input-1-live-feedback">¡Este campo es requerido!</b-form-invalid-feedback>
                </b-form-group>
              </b-col>
            </b-row>

            <b-form-group id="descripcionInstrumento" label="Descripcion" label-for="descripcion">
              <b-form-textarea
                id="descripcion"
                v-model="$v.instrumentoActual.descripcion.$model"
                :state="validateState('descripcion')"
                placeholder="Ingrese la descripcion del instrumento..."
                required
              ></b-form-textarea>
              <b-form-invalid-feedback id="input-1-live-feedback">¡Este campo es requerido!</b-form-invalid-feedback>
            </b-form-group>

            <b-row>
              <b-col>
                <b-form-group id="precioInstrumento" label="Precio" label-for="precio">
                  <b-form-input
                    id="precio"
                    type="number"
                    v-model="$v.instrumentoActual.precio.$model"
                    :state="validateState('precio')"
                    placeholder="$"
                    required
                  ></b-form-input>
                  <b-form-invalid-feedback id="input-1-live-feedback">¡Este campo es requerido!</b-form-invalid-feedback>
                </b-form-group>
              </b-col>
              <b-col>
                <b-form-group id="envioInstrumento" label="Costo de envío" label-for="costoEnvio">
                  <b-form-input
                    id="costoEnvio"
                    type="text"
                    v-model="$v.instrumentoActual.costoEnvio.$model"
                    :state="validateState('costoEnvio')"
                    placeholder="G or $"
                    required
                  ></b-form-input>
                  <b-form-invalid-feedback id="input-1-live-feedback">¡Este campo es requerido!</b-form-invalid-feedback>
                </b-form-group>
              </b-col>
              <b-col>
                <b-form-group
                  id="vendidosInstrumento"
                  label="Cant. vendida"
                  label-for="cantidadVendida"
                >
                  <b-form-input
                    id="cantidadVendida"
                    type="number"
                    v-model="$v.instrumentoActual.cantidadVendida.$model"
                    :state="validateState('cantidadVendida')"
                    placeholder="Cantidad vendida"
                    required
                  ></b-form-input>
                  <b-form-invalid-feedback id="input-1-live-feedback">¡Este campo es requerido!</b-form-invalid-feedback>
                </b-form-group>
              </b-col>
            </b-row>

            <b-form-group id="imagenInstrumento" label="Imagen del instrumento" label-for="imagen">
              <b-form-input
                id="imagen"
                type="text"
                v-model="$v.instrumentoActual.imagen.$model"
                :state="validateState('imagen')"
                placeholder="Imagen"
                title="Ingrese la descripcion del instrumento..."
                disabled
              ></b-form-input>
              <b-form-invalid-feedback id="input-1-live-feedback">¡Este campo es requerido!</b-form-invalid-feedback>
            </b-form-group>
            <b-form-group>
              <div id="image">
                <input type="file" @change="onImageUpload" />
              </div>
            </b-form-group>
          </form>
          <!-- fin formulario -->
        </b-modal>
        <!-- fin ventana modal -->
      </div>
    </b-container>
  </div>
</template>

<script>
import axios from "axios";
import { validationMixin } from "vuelidate";
import { required } from "vuelidate/lib/validators";

export default {
  name: "ProductTable",
  mixins: [validationMixin],
  mounted() {
    this.getInstrumentos();
  },
  data() {
    return {
      displayColumns: [
        "instrumento",
        "modelo",
        "precio",
        "costoEnvio",
        "cantidadVendida",
        "actions"
      ],
      titulo: null,
      instrumentosData: [],
      instrumentoActual: {
        id: 0,
        instrumento: null,
        marca: null,
        modelo: null,
        imagen: null,
        precio: null,
        costoEnvio: null,
        cantidadVendida: null,
        descripcion: null
      }
    };
  },
  validations: {
    instrumentoActual: {
      instrumento: { required },
      marca: { required },
      modelo: { required },
      imagen: { required },
      precio: { required },
      costoEnvio: { required },
      cantidadVendida: { required },
      descripcion: { required }
    }
  },
  methods: {
    validateState(campo) {
      const { $dirty, $error } = this.$v.instrumentoActual[campo];
      return $dirty ? !$error : null;
    },
    /* Método que trae del servidor la lista completa de instrumentos */
    getInstrumentos() {
      axios
        .get("http://localhost:8080/api/v1/instrumentos")
        .then(res => {
          this.instrumentosData = res.data;
        })
        .catch(err => {
          console.log(err);
        });
    },
    /* Método que me permite cerrar la ventana modal */
    hideModal() {
      this.$refs["modal-ref"].hide();
    },
    /* Método que se ejecuta al cerrar la ventana modal para resetear los valores del instrumento */
    resetModal() {
      this.instrumentoActual = {
        id: 0,
        instrumento: null,
        marca: null,
        modelo: null,
        imagen: null,
        precio: null,
        costoEnvio: null,
        cantidadVendida: null,
        descripcion: null
      };
    },
    /* Método que llamo al hacer click en el botón "Editar" para asignar el instrumento de la fila al "instrumentoActual" que voy a usar en el formulario */
    setEditar(instrumento) {
      this.titulo = "Editar";
      this.instrumentoActual = instrumento;
    },
    /* Asigno el título Añadir a la ventana modal cuando hago click en el botón "Añadir" */
    setTituloAdd() {
      this.titulo = "Añadir";
    },
    /* Método que controla el evento click sobre el botón "ok" del footer del modal */
    handleOk(bvModalEvt) {
      // Prevent modal from closing
      bvModalEvt.preventDefault();
      // Trigger submit handler
      this.handleSubmit();
    },
    /* Método que hace el submit del formulario */
    handleSubmit() {
      if (this.instrumentoActual.id !== 0) {
        this.updateInstrumento(this.instrumentoActual);
      } else {
        this.addInstrumento(this.instrumentoActual);
      }
    },
    /* Metodo en el que me comunico con el servidor para AGREGAR un instrumento */
    addInstrumento(instrumento) {
      axios
        .post("http://localhost:8080/api/v1/instrumentos/", instrumento)
        .then(response => {
          console.log(response.data);
          this.instrumentosData.push(response.data);
          this.hideModal();
          alert("Instrumento agregado con éxito!");
        })
        .catch(e => {
          console.log(e);
          alert("Ha ocurrido un error, intenta más tarde!");
        });
    },
    /* Método en el que me comunico con el servidor para ACTUALIZAR un instrumento */
    updateInstrumento(instrumento) {
      axios
        .put(
          "http://localhost:8080/api/v1/instrumentos/" + instrumento.id,
          instrumento
        )
        .then(response => {
          console.log(response.data);
          this.hideModal();
          alert("Instrumento actualizado con éxito!");
        })
        .catch(e => {
          console.log(e);
          alert("Ha ocurrido un error, intenta más tarde!");
        });
    },
    /* Método en el que me comunico con el servidor para ELIMINAR un instrumento */
    deleteInstrumento(instrumento) {
      const confirmar = confirm("Seguro deseas eliminar este instrumento?");
      if (confirmar) {
        axios
          .delete("http://localhost:8080/api/v1/instrumentos/" + instrumento.id)
          .then(response => {
            console.log(response.data);
            const index = this.instrumentosData.indexOf(instrumento);
            this.instrumentosData.splice(index, 1);
          })
          .catch(e => {
            console.log(e);
          });
      }
    },
    /* Método en el que me comunico con el servidor para agregar una imagen */
    onImageUpload(event) {
      const data = new FormData();
      data.append("file", event.target.files[0]);
      this.instrumentoActual.imagen = event.target.files[0].name;
      // Llamo al servicio y realizo el upload de la imagen
      axios
        .post("http://localhost:8080/api/v1/instrumentos/images", data)
        .then(response => {
          console.log(response.data);
        })
        .catch(e => {
          console.log(e);
          alert("Ocurrió un error al cargar la imagen, intente nuevamente");
        });
    }
  }
};
</script>