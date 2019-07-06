const packageStatus: { [k: string]: string } = {
  created: "STATUS_UPDATE_CREATED",
  transmitted: "STATUS_UPDATE_TRANSMITTED",
  inPreparation: "STATUS_UPDATE_IN_PREPARATION",
  prepared: "STATUS_UPDATE_PREPARED",
  shipped: "STATUS_UPDATE_SHIPPED",
  deliveryException: "STATUS_UPDATE_DELIVERY_EXCEPTION",
  delivered: "STATUS_UPDATE_DELIVERED",
  destination: "DATA_UPDATE_DESTINATION",
  customer: "DATA_UPDATE_CUSTOMER"
};

export default packageStatus;
