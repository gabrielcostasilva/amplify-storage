<template>
  <section class="py-5 text-center container">
    <div class="row py-lg-5">
      <div class="col-lg-6 col-md-8 mx-auto">
        <h1 class="fw-light">Amplify Album Example</h1>
        <p class="lead text-muted">
          This project builds on top of the Bootstrap 5 Album template to show
          amplify Auth and Storage API in action. Cloud resources include
          Cognito User Pool and Identity Pool, S3 bucket, IAM Roles and
          Policies.
        </p>
      </div>
    </div>
  </section>

  <div class="album py-5 bg-light">
    <div class="container">
      <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
        <div class="col" v-for="aPicture in pictureList" :key="aPicture">
          <div class="card shadow-sm">
            <img
              :src="aPicture"
              class="card-img-top img-fluid"
              style="max-width: 3000px; max-height: 200px"
            />

            <div class="card-body">
              <p class="card-text"></p>
              <div class="d-flex justify-content-between align-items-center">
                <div class="btn-group">
                  <button
                    type="button"
                    class="btn btn-sm btn-outline-secondary"
                  >
                    View
                  </button>
                  <button
                    type="button"
                    class="btn btn-sm btn-outline-secondary"
                  >
                    Edit
                  </button>
                </div>
                <small class="text-muted">9 min</small>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Storage, Auth } from 'aws-amplify'

export default {
  data() {
    return {
      pictureList: [],
    }
  },
  async mounted() {
    const result = await Storage.list('', {
      identityId: Auth.currentAuthenticatedUser.identityId,
    })

    this.pictureList = await Promise.all(
      result.map((item) => Storage.get(item.key))
    )
  },
}
</script>
