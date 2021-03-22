<template>
<v-flex sm8 offset-sm2>
    <v-card>
        <v-toolbar dark>
            <v-toolbar-title>Message</v-toolbar-title>
        </v-toolbar>   
        {{messageBody.message}}
    </v-card>
</v-flex>    
</template>

<script>



export default {
    data() {
        return {
            messageBody:""

        }
    },
    async created() {
        this.messageBody = (await this.$store.dispatch('getMessage',this.$route.params.id)).data
    }
    
};
</script>

<style>

</style>



