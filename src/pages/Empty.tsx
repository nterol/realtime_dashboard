import React from "react";

import { EmptyContainer } from "./page";

const sentences: { [k: string]: string } = {
  all: "Il n'y a pas encore de commandes",
  created: "Il n'y a pas encore de commandes en cours de traitement",
  prepared: "Il n'y a pas encore de commandes en cours de préparation",
  shipped: "Aucune commande n'est en cours de livraison",
  delivered: "Aucune commande n'a été livrée",
  exception: "Aucun problème à signaler ! keep up the good work 👍"
};

const wording = (t: string): string => sentences[t];

const Empty = ({ type }: { type: string }) => (
  <EmptyContainer>{wording(type)}</EmptyContainer>
);

export default Empty;
