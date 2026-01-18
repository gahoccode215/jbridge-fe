import Keycloak from "keycloak-js";

const keycloak = new Keycloak({
    url: "http://localhost:9080",
    realm: "test",
    clientId: "test"
});

export default keycloak;