$(function(){
    $('.round').easyPieChart({
        size :160,
        barColor: function(percent) {
            var ctx = this.renderer.getCtx();
            var canvas = this.renderer.getCanvas();
            var gradient = ctx.createLinearGradient(0,0,canvas.width,0);
                gradient.addColorStop(0, "rgb(0, 236, 236)");
                gradient.addColorStop(1, "rgb(103, 252, 123)");
            return gradient;
          },
        scaleLength: 0,
        lineWidth: 12,
        trackColor: "#525151",
        animate: 2000 
    })
})