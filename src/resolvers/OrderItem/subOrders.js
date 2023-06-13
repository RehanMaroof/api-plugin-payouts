

/**
 * @name OrderItem/subOrders
 * @method
 * @memberof Catalog/GraphQL
 * @summary Returns the tags for an OrderItem
 * @param {Object} orderItem - OrderItem from parent resolver
 * @param {TagConnectionArgs} connectionArgs - arguments sent by the client {@link ConnectionArgs|See default connection arguments}
 * @param {Object} context - an object containing the per-request state
 * @param {Object} info Info about the GraphQL request
 * @returns {Promise<Object[]>} Promise that resolves with array of Tag objects
 */
export default async function subOrders(parent, connectionArgs, context, info) {
  const { collections } = context;
  const { SubOrders } = collections;

  const SubOrdersData = await SubOrders.find({ "parentId": parent._id }).toArray();
 return SubOrdersData;
  // if (sellerInfo) {
  //   const response = {
  //     storeName: sellerInfo?.storeName,
  //     name: sellerInfo?.profile?.name,
  //     email: sellerInfo?.emails[0]?.address,
  //     billingAddress: { ...sellerInfo?.billing, address1: sellerInfo?.billing?.address }
  //   }
  //   return response;
  // }
  // else {
  //   return null;
  // }
}
