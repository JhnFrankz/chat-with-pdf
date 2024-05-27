<script>
  import { Alert } from "flowbite-svelte";
  import { APP_STATUS, appStatus } from "../store.ts";
</script>

{#if $appStatus === APP_STATUS.INIT}
  <p>La página inicial</p>
{:else if $appStatus === APP_STATUS.LOADING}
  <p>Loading...</p>
{:else if $appStatus === APP_STATUS.ERROR}
  <Alert>
    <span class="font-medium">¡Algo malo ha pasado!</span>
    Hay un error en la aplicación.
  </Alert>
{:else if $appStatus === APP_STATUS.CHAT_MODE}
  <p>Chat Mode</p>
{:else}
  <Alert>
    <span class="font-medium">Acción no reconocida</span>
    Este estado de la aplicación no está reconocido
  </Alert>
{/if}

<Alert>
  <span class="font-medium">Default alert!</span>
  Change a few things up and try submitting again.
</Alert>
