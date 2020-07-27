<template>
    <div class="row justify-content-center">
        <div class="col-xl-10 col-lg-12 col-md-9">
            <div class="card shadow-sm my-5">
                <div class="card-body p-0">
                    <div class="row">
                        <div class="col-lg-12">
                            <div class="login-form">
                                <div class="text-center">
                                    <h1 class="h4 text-gray-900 mb-4">
                                        Register
                                    </h1>
                                </div>
                                <form @submit.prevent="handleSubmit">
                                    <div class="form-group">
                                        <input
                                            type="text"
                                            class="form-control"
                                            id="exampleInputFirstName"
                                            placeholder="Enter name"
                                            v-model="form.name"
                                        />
                                        <small
                                            v-if="errors.name"
                                            id="emailHelp"
                                            class="form-text text-danger"
                                        >
                                            {{ errors.name[0] }}
                                        </small>
                                    </div>

                                    <div class="form-group">
                                        <input
                                            type="email"
                                            v-model="form.email"
                                            class="form-control"
                                            id="exampleInputEmail"
                                            aria-describedby="emailHelp"
                                            placeholder="Enter Email Address"
                                        />
                                        <small
                                            v-if="errors.email"
                                            id="nameHelp"
                                            class="form-text text-danger"
                                        >
                                            {{ errors.email[0] }}
                                        </small>
                                    </div>

                                    <div class="form-group">
                                        <input
                                            type="password"
                                            v-model="form.password"
                                            class="form-control"
                                            id="exampleInputPassword"
                                            placeholder="Password"
                                        />
                                        <small
                                            v-if="errors.password"
                                            id="passwordHelp"
                                            class="form-text text-danger"
                                        >
                                            {{ errors.password[0] }}
                                        </small>
                                    </div>

                                    <div class="form-group">
                                        <input
                                            type="password"
                                            class="form-control"
                                            id="exampleInputPasswordRepeat"
                                            placeholder="Repeat Password"
                                            v-model="form.password_confirmation"
                                        />
                                        <small
                                            v-if="errors.password_confirmation"
                                            id="passwordConfirmHelp"
                                            class="form-text text-danger"
                                        >
                                            {{
                                                errors.password_confirmation[0]
                                            }}
                                        </small>
                                    </div>

                                    <div class="form-group">
                                        <button
                                            type="submit"
                                            class="btn btn-primary btn-block" :disabled="loading ? true : false"
                                        >
                                            Register
                                        </button>
                                    </div>

                                    <hr />
                                </form>
                                <hr />
                                <div class="text-center">
                                    <router-link
                                        class="font-weight-bold small"
                                        to="/login"
                                    >
                                        Already have an account?
                                    </router-link>
                                </div>
                            </div>
                        </div>
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
            form: {
                name: "",
                email: "",
                password: "",
                password_confirmation: "",
            },
            loading: false,
            errors: {},
        };
    },

    methods: {
        handleSubmit() {
            this.loading = true;
            axios
                .post("/api/auth/register", this.form)
                .then(({ data }) => {
                    User.responseAfterLogin(data);
                    this.$router.push({
                        name: "Dashboard",
                    });
                    this.loading = false;
                })
                .catch((err) => {
                    this.errors = err.response.data.errors;
                    this.loading = false;
                });
        },
    },
};
</script>
