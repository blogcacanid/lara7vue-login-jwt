<template>
    <div class="container">
        <div class="row">
            <div class="col-md-8 col-md-offset-2">
                <h1>Home</h1>

                <p>
                    <router-link :to="{ name: 'logout' }">Logout</router-link>
                </p>

                <div class="panel panel-default">
                    <div class="panel-heading">This is Homepage</div>
                    <div class="panel-body">
                        <p>Lorem ipsum</p>
                    </div>
                </div>

            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                data: 'nothing'
            }
        },
        mounted() {
            axios.get('/api/auth/profile', {
                headers: {
                    Authorization: 'Bearer ' + localStorage.getItem('token')
                }
            })
            .then(response => {
                this.data = response.data.data
            }).catch(error => {

            })
        }
    }
</script>
