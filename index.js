
/**
 * Draw rectangle on canvas.
 *
 * @param {CanvasRenderingContext2D} ctx
 * @param {Object} node
 * @api public
 */

module.exports = function(ctx, node){
  if (node.fill) {
    ctx.fillStyle = node.fill.style;
    ctx.fillRect(node.x, node.y, node.width, node.height);
  }

  if (node.stroke) {
    ctx.strokeStyle = node.stroke.style;
    ctx.lineWidth = node.stroke.width;
    ctx.strokeRect(node.x, node.y, node.width, node.height);
  }
};