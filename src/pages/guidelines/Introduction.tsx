import React from "react";

import Title from "../../components/title/Title";
import Text from "../../components/text/Text";

export default function Introduction() {
    return (
        <div>
            <Title>Introduction</Title>
            {/* Pour Omega, le design est à la base d'un produit ou service
            agréable pour l'utilisateur. Le projet Omega étant ouvert à
            tous, le risque que la charte graphique d'Omega se déforme
            est non-négligeable. S'il venait à subir des déformations,
            la consistance du projet ne serait plus ressentie par
            l'utilisateur. */}
            <Text>
                For Omega, design is the basis of a user-friendly product or
                service. As the Omega project is open to everyone, the risk that
                Omega's graphic guidelines will be distorted is not
                insignificant. If it were to undergo deformations, the
                consistency of the project would no longer be felt by the user.
            </Text>
            <Text>
                In order to avoid this kind of problem, this graphic charter has
                been created. Although you have no legal obligation to comply
                with it, we strongly recommend that you apply it firmly.
            </Text>
        </div>
    );
}
