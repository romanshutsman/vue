<template>
    <form @submit.prevent="submit">
        <div class="form-control" :class="{invalid: firstName.invalid}">
            <label for="firstname">FirstName</label>
            <input type="text" id="firstname" v-model.trim="firstName.value" >
        </div>
        <div class="form-control" :class="{invalid: lastName.invalid}">
            <label for="lastname">Last Name</label>
            <input type="text" id="lastname" v-model.trim="lastName.value">
        </div>
        <div class="form-control" :class="{invalid: description.invalid}">
            <label for="description">Description</label>
            <textarea rows="5" id="Description" v-model.trim="description.value"></textarea>
        </div>
        <div class="form-control" :class="{invalid: rate.invalid}">
            <label for="rate">Hourly Rate</label>
            <input type="number" id="rate" v-model.number="rate.value">
        </div>
        <div class="form-control" :class="{invalid: areas.invalid}">
            <h3>Areas of Expertise</h3>
            <div >
                <input type="checkbox" id="frontend" value="frontend" v-model="areas.value">
                <label for="frontend">FrontEnd</label>
            </div>
            <div >
                <input type="checkbox" id="backend" value="backend" v-model="areas.value">
                <label for="backend">Backend</label>
            </div>
            <div >
                <input type="checkbox" id="career" value="career" v-model="areas.value">
                <label for="career">Career</label>
            </div>
            <base-button>Register</base-button>
        </div>
    </form>
</template>

<script>


export default {
    name: "CoachForm",
    emits: ['complete-form'],
    data() {
        return {
            firstName: {value: '', invalid: false},
            lastName: {value: '', invalid: false},
            description: {value: '', invalid: false},
            rate: {value: null, invalid: false},
            areas: {value: [], invalid: false},
            isFormValid: true
        }
    },
    methods: {
        validateForm() {
            this.isFormValid = true;
          if(this.firstName.value === '') {
              this.firstName.invalid = true;
              this.isFormValid = false;
          } else {
              this.firstName.invalid = false;
          }
            if(this.lastName.value === '') {
                this.lastName.invalid = true;
                this.isFormValid = false;
            }else {
                this.lastName.invalid = false;
            }
            if(this.description.value === '') {
                this.description.invalid = true;
                this.isFormValid = false;
            }else {
                this.description.invalid = false;
            }
            if(!this.rate.value || this.rate.value < 0) {
                this.rate.invalid = true;
                this.isFormValid = false;
            }else {
                this.rate.invalid = false;
            }
            if(this.areas.value.length === 0) {
                this.areas.invalid = true;
                this.isFormValid = false;
            }else {
                this.areas.invalid = false;
            }
        },
        submit() {
            this.validateForm();
            console.log(this.isFormValid)
            if(!this.isFormValid) return;
            const formData = {
                first: this.firstName.value,
                last: this.lastName.value,
                desc: this.description.value,
                rate: this.rate.value,
                areas: this.areas.value,
            };
            this.$emit('complete-form', formData);
        }
    }
}
</script>

<style scoped>
.form-control {
    margin: 0.5rem 0;
}

label {
    font-weight: bold;
    display: block;
    margin-bottom: 0.5rem;
}

input[type='checkbox'] + label {
    font-weight: normal;
    display: inline;
    margin: 0 0 0 0.5rem;
}

input,
textarea {
    display: block;
    width: 100%;
    border: 1px solid #ccc;
    font: inherit;
}

input:focus,
textarea:focus {
    background-color: #f0e6fd;
    outline: none;
    border-color: #3d008d;
}

input[type='checkbox'] {
    display: inline;
    width: auto;
    border: none;
}

input[type='checkbox']:focus {
    outline: #3d008d solid 1px;
}

h3 {
    margin: 0.5rem 0;
    font-size: 1rem;
}

.invalid label {
    color: red;
}

.invalid input,
.invalid textarea {
    border: 1px solid red;
}
</style>