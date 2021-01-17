import api from "@/utils/api";

export default {
    data() {
        return {
            data: "",
        };
    },
    methods: {
        async showData(url) {
            const res = await api.get(url);
            this.data = res;
            return this.data;
        },
    },
};
