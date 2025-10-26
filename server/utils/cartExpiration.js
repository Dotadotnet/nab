const Cart = require("../models/cart.model");

/**
 * Expire pending carts that are older than the specified time
 * @param {number} maxAgeHours - Maximum age in hours before carts are expired (default: 24)
 * @returns {Promise<Object>} Result of the update operation
 */
async function expirePendingCarts(maxAgeHours = 24) {
  try {
    console.log(`🔍 Checking for pending carts older than ${maxAgeHours} hours...`);
    
    const result = await Cart.expirePendingCarts(maxAgeHours);
    
    if (result.modifiedCount > 0) {
      console.log(`✅ Expired ${result.modifiedCount} pending carts`);
    } else {
      console.log("ℹ️  No pending carts to expire");
    }
    
    return result;
  } catch (error) {
    console.error("❌ Error expiring pending carts:", error);
    throw error;
  }
}

/**
 * Setup interval to automatically expire pending carts
 * @param {number} intervalMinutes - How often to check for expired carts (default: 60 minutes)
 * @param {number} maxAgeHours - Maximum age in hours before carts are expired (default: 24)
 */
function setupCartExpirationJob(intervalMinutes = 60, maxAgeHours = 24) {
  console.log(`🕒 Setting up cart expiration job to run every ${intervalMinutes} minutes`);
  console.log(`🕒 Carts older than ${maxAgeHours} hours will be marked as expired`);
  
  // Run immediately on startup
  expirePendingCarts(maxAgeHours);
  
  // Set up interval to run periodically
  setInterval(async () => {
    try {
      await expirePendingCarts(maxAgeHours);
    } catch (error) {
      console.error("❌ Error in cart expiration job:", error);
    }
  }, intervalMinutes * 60 * 1000); // Convert minutes to milliseconds
}

module.exports = {
  expirePendingCarts,
  setupCartExpirationJob
};