<script>
import { auth } from '@/firebase'; // Import the auth object from your firebase.js file

export default {
  methods: {
    async signInWithGoogle() {
      try {
        // Sign in with Google using the Firebase `auth` object
        // You can customize this based on your needs
        const provider = new GoogleAuthProvider(); // Import GoogleAuthProvider from Firebase
        await signInWithPopup(auth, provider);
      } catch (error) {
        console.error('Error signing in with Google:', error);
      }
    },
  },
};
</script>

<template>
  <div class="auth-layout-wrap flex justify-center min-h-screen flex-col bg-cover items-center" style="background-image: url(../../images/photo-wide-4.jpg)">
        <div class="container-session-v1 max-w-2xl">
            <BaseCard noPadding class="overflow-hidden">
              <div class="grid grid-cols-12">
                  <div class="col-span-12 lg:col-span-6">
                      <div class="p-5 content-center">
                        <a href="/">
                    <img
                        class="w-25"
                        src="/logo.png"
                    />
                </a>
                          <h1 class="mb-3 text-lg">Sign In </h1>
                          <form action="">
                              <div class="mb-3">
                                  <label class="text-xs text-gray-600" for="">Email Address</label>
                                  <input class="w-full px-4 py-1 bg-gray-100 focus:outline-none border border-gray-400 rounded-full" value="ui-lib@gmail.com" type="email" placeholder="">
                              </div>
                              <div class="mb-3">
                                  <label class="text-xs text-gray-600" for="">Password</label>
                                  <input class="w-full px-4 py-1 bg-gray-100 focus:outline-none border border-gray-400 rounded-full" value="askjhdgahsgd" type="password" placeholder="">
                              </div>
                              <div class="mb-4">
      
                                  <BaseBtn block class="bg-purple-500 mb-2 text-white  rounded-full">
                                    <router-link to="/dashboards/dashboard-version-one" tag="li" class="nav-item">
                              <div class="nav-item-hold">
                                <p>Sign in</p>
                            </div>
                        </router-link>
                                  </BaseBtn>
                                  <BaseBtn block class="bg-purple-500 mb-2 text-white  rounded-full">Create an account</BaseBtn>
                              </div>
                              <div class="text-center">
                                <a class="hover:text-purple-500 underline text-gray-600" href="#">Forgot Password?</a>
                              </div>
                          </form>
                      </div>
                  </div>
                  <div class="col-span-12 bg-cover lg:col-span-6" style="background-image: url(../../images/photo-long-3.jpg)">
                      <div class="flex justify-center items-center flex-col h-full px-4 py-2">
                          
                          <BaseBtn block rounded class=" mb-3 border border-red-500 bg-gray-100 text-red-500 hover:bg-red-500 hover:text-white">
                            <div>
                              <router-link to="/dashboards/dashboard-version-one" tag="li" class="nav-item">
                              <div class="nav-item-hold">
                                <p>Sign in with Google</p>
                            </div>
                        </router-link>
                            </div>
                          </BaseBtn>
                        
                      </div>
                  </div>
              </div>
            </BaseCard>
            
        </div>
    </div>
</template>