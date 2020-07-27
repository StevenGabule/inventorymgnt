<template>
    <div class="row justify-content-center">
        <div class="col-xl-10 col-lg-12 col-md-9">
            <div class="card shadow-sm my-5">
                <div class="card-body p-0">
                    <div class="row">
                        <div class="col-lg-12">
                            <div class="login-form">
                                <div class="text-center">
                                    <h1 class="h4 text-gray-900 mb-4">Login</h1>
                                </div>
                                <form
                                    class="user"
                                    @submit.prevent="handleSubmit"
                                >
                                    <div class="form-group">
                                        <input
                                            type="email"
                                            class="form-control"
                                            id="exampleInputEmail"
                                            aria-describedby="emailHelp"
                                            v-model="form.email"
                                            placeholder="Enter Email Address"
                                        />
                                    </div>
                                    <div class="form-group">
                                        <input
                                            type="password"
                                            class="form-control"
                                            v-model="form.password"
                                            id="exampleInputPassword"
                                            placeholder="Password"
                                        />
                                    </div>
                                    <div class="form-group">
                                        <div
                                            class="custom-control custom-checkbox small"
                                            style="line-height: 1.5rem;"
                                        >
                                            <input
                                                type="checkbox"
                                                class="custom-control-input"
                                                id="customCheck"
                                            />
                                            <label
                                                class="custom-control-label"
                                                for="customCheck"
                                                >Remember Me</label
                                            >
                                        </div>
                                    </div>
                                    <div class="form-group">
                                        <button
                                            type="submit"
                                            class="btn btn-primary btn-block"
                                            :disabled="loading ? true : false"
                                        >
                                            <span v-if="!loading">
                                                Login
                                            </span>
                                            <span v-else="loading">
                                                Please wait...
                                            </span>
                                        </button>
                                    </div>
                                    <hr />
                                </form>
                                <div class="alert alert-danger alert-dismissible fade show"
                                    role="alert" v-if="error">
                                    The email and password didn't found, Please try again!
                                    <button
                                        type="button"
                                        class="close"
                                        data-dismiss="alert"
                                        aria-label="Close"
                                    >
                                        <span aria-hidden="true">&times;</span>
                                    </button>
                                </div>
                                <div class="text-center">
                                    <router-link
                                        class="font-weight-bold small"
                                        to="/register"
                                    >
                                        Create an Account!
                                    </router-link>
                                </div>
                                <div class="text-center">
                                    <router-link
                                        class="font-weight-bold small"
                                        to="/forget"
                                    >
                                        Forget Password?
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
                email: "vida12@example.com",
                password: "password",
            },
            loading: false,
            error: false,
        };
    },

    created() {
        if (User.loggedIn()) {
            this.$router.push({
                name: "Dashboard",
            });
        }
    },

    methods: {
        handleSubmit() {
            this.error = false;
            this.loading = true;
            axios
                .post("/api/auth/login", this.form)
                .then(({ data }) => {
                    User.responseAfterLogin(data);

                    this.$router.push({
                        name: "Dashboard",
                    });

                    this.error = false;
                    this.loading = false;
                })
                .catch((err) => {
                    console.error(err.response.data);
                    this.loading = false;
                    this.error = true;
                });
        },
    },
};
</script>
