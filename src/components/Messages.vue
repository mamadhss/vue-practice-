<template>
<v-flex sm8 offset-sm2>
    <v-card>
        <v-toolbar dark>
            <v-toolbar-title>Messages</v-toolbar-title>
        </v-toolbar>    
        <v-list>
            <v-list-item v-for="message in $store.state.messages"  :key="message.id">
            
                

                <v-list-item-content>
                    <v-list-item-title v-text="message.message"></v-list-item-title>
                </v-list-item-content>

            
            </v-list-item>
        </v-list>
    </v-card>
        
</v-flex>
  
</template>

<script>



export default {
    async created() {
        this.$store.dispatch('getMessages')
        
    }

};
</script>

<style>

</style>