<template>
    <div>
        <h2 class="d-flex align-items-center
     justify-content-between">Мои любимые цитаты</h2>
        <b-form class="mb-3 add-form" @submit.prevent="onAddNote">
            <div>
                <b-input
                        id="inline-form-input-name"
                        class="mr-sm-2"
                        v-model="name"
                        name="name"
                        v-validate="'required'"
                        :state="!!errors.has('name') ? false : ''"
                        placeholder="Цитата..."
                        data-vv-as="Amount"
                ></b-input>
                <b-form-invalid-feedback :state="errors.has('name')">
                    {{ errors.first ('name') }}
                </b-form-invalid-feedback>
            </div>
            <b-button class="btn" type="submit" variant="primary">Добавить</b-button>
        </b-form>
    </div>
</template>

<script>
    import { mapActions } from 'vuex';

    export default {
        name: "CreateNoteForm",
        data(){
            return {
                name: ''
            }
        },
        methods: {
            ...mapActions({
                add: 'Note/addNote'
            }),
            async onAddNote(){
                const vResult = await this.$validator.validateAll();
                if(vResult){
                    this.add(this.name);
                    this.name = '';
                }
            },
        }
    }
</script>

<style scoped lang="sass">
    .add-form
        display: flex
        width: 600px
        margin: 0 auto
        padding-top: 10px
        input
            width: 90%
        .btn
            align-self: flex-start !important
</style>