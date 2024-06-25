<template>
    InputComponent
</template>
<script>
import { defineComponent } from '@vue/composition-api'
import { useAudioStore } from '~/store/audio'
import { useKeyStore } from '~/store/key';

export default defineComponent({
    setup() {
        const audioStore = useAudioStore;
        const keyStore = useKeyStore;
        console.log(audioStore.toString(), keyStore.toString());
    },
})
</script>
