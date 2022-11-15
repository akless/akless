/*
 Highcharts JS v10.3.1 (2022-10-31)

 (c) 2009-2021 Torstein Honsi

 License: www.highcharts.com/license
*/
(function(a){"object"===typeof module&&module.exports?(a["default"]=a,module.exports=a):"function"===typeof define&&define.amd?define("highcharts/modules/series-label",["highcharts"],function(r){a(r);a.Highcharts=r;return a}):a("undefined"!==typeof Highcharts?Highcharts:void 0)})(function(a){function r(a,g,A,d){a.hasOwnProperty(g)||(a[g]=d.apply(null,A),"function"===typeof CustomEvent&&window.dispatchEvent(new CustomEvent("HighchartsModuleLoaded",{detail:{path:g,module:a[g]}})))}a=a?a._modules:{};
r(a,"Extensions/SeriesLabel/SeriesLabelDefaults.js",[],function(){return{enabled:!0,connectorAllowed:!1,connectorNeighbourDistance:24,format:void 0,formatter:void 0,minFontSize:null,maxFontSize:null,onArea:null,style:{fontWeight:"bold"},useHTML:!1,boxesToAvoid:[]}});r(a,"Extensions/SeriesLabel/SeriesLabelUtilities.js",[],function(){function a(a,d,g,v,p,t){a=(t-d)*(g-a)-(v-d)*(p-a);return 0<a?!0:!(0>a)}function g(A,d,g,v,p,t,y,z){return a(A,d,p,t,y,z)!==a(g,v,p,t,y,z)&&a(A,d,g,v,p,t)!==a(A,d,g,v,y,
z)}return{boxIntersectLine:function(a,d,r,v,p,t,y,z){return g(a,d,a+r,d,p,t,y,z)||g(a+r,d,a+r,d+v,p,t,y,z)||g(a,d+v,a+r,d+v,p,t,y,z)||g(a,d,a,d+v,p,t,y,z)},intersectRect:function(a,d){return!(d.left>a.right||d.right<a.left||d.top>a.bottom||d.bottom<a.top)}}});r(a,"Extensions/SeriesLabel/SeriesLabel.js",[a["Core/Animation/AnimationUtilities.js"],a["Core/Chart/Chart.js"],a["Core/FormatUtilities.js"],a["Core/Defaults.js"],a["Extensions/SeriesLabel/SeriesLabelDefaults.js"],a["Extensions/SeriesLabel/SeriesLabelUtilities.js"],
a["Core/Utilities.js"]],function(a,g,r,d,M,v,p){function t(c,a,b,w,f){var e=c.chart,D=B(c.options.label.onArea,!!c.area),m=D||c.options.label.connectorAllowed,l=Number.MAX_VALUE,E=Number.MAX_VALUE,d,q,k;for(q=0;q<e.boxesToAvoid.length;q+=1)if(N(e.boxesToAvoid[q],{left:a,right:a+w.width,top:b,bottom:b+w.height}))return!1;for(q=0;q<e.series.length;q+=1){var g=e.series[q];var h=g.interpolatedPoints;if(g.visible&&h){for(k=1;k<h.length;k+=1){if(h[k].chartX>=a-16&&h[k-1].chartX<=a+w.width+16){if(I(a,b,
w.width,w.height,h[k-1].chartX,h[k-1].chartY,h[k].chartX,h[k].chartY))return!1;c===g&&!d&&f&&(d=I(a-16,b-16,w.width+32,w.height+32,h[k-1].chartX,h[k-1].chartY,h[k].chartX,h[k].chartY))}if((m||d)&&(c!==g||D)){var p=a+w.width/2-h[k].chartX;var t=b+w.height/2-h[k].chartY;l=Math.min(l,p*p+t*t)}}if(!D&&m&&c===g&&(f&&!d||l<Math.pow(c.options.label.connectorNeighbourDistance,2))){for(k=1;k<h.length;k+=1)if(g=Math.min(Math.pow(a+w.width/2-h[k].chartX,2)+Math.pow(b+w.height/2-h[k].chartY,2),Math.pow(a-h[k].chartX,
2)+Math.pow(b-h[k].chartY,2),Math.pow(a+w.width-h[k].chartX,2)+Math.pow(b-h[k].chartY,2),Math.pow(a+w.width-h[k].chartX,2)+Math.pow(b+w.height-h[k].chartY,2),Math.pow(a-h[k].chartX,2)+Math.pow(b+w.height-h[k].chartY,2)),g<E){E=g;var n=h[k]}d=!0}}}return!f||d?{x:a,y:b,weight:l-(n?E:0),connectorPoint:n}:!1}function y(c){var a=c.labelSeries;c.boxesToAvoid=[];a.forEach(function(b){b.interpolatedPoints=z(b);(b.options.label.boxesToAvoid||[]).forEach(function(b){c.boxesToAvoid.push(b)})});c.series.forEach(function(b){function a(b,
c,a){var e=Math.max(g,B(v,-Infinity)),f=Math.min(g+k,B(y,Infinity));return b>e&&b<=f-a.width&&c>=q&&c<=q+p-a.height}var f=b.options.label;if(f&&(b.xAxis||b.yAxis)){var e="highcharts-color-"+B(b.colorIndex,"none"),D=!b.labelBySeries,m=f.minFontSize,l=f.maxFontSize,d=c.inverted,g=d?b.yAxis.pos:b.xAxis.pos,q=d?b.xAxis.pos:b.yAxis.pos,k=c.inverted?b.yAxis.len:b.xAxis.len,p=c.inverted?b.xAxis.len:b.yAxis.len,h=b.interpolatedPoints,r=B(f.onArea,!!b.area),x=[],n,u=b.labelBySeries;if(r&&!d){d=[b.xAxis.toPixels(b.xData[0]),
b.xAxis.toPixels(b.xData[b.xData.length-1])];var v=Math.min.apply(Math,d);var y=Math.max.apply(Math,d)}if(b.visible&&!b.boosted&&h){u||(u=b.name,"string"===typeof f.format?u=O(f.format,b,c):f.formatter&&(u=f.formatter.call(b)),b.labelBySeries=u=c.renderer.label(u,0,0,"connector",0,0,f.useHTML).addClass("highcharts-series-label highcharts-series-label-"+b.index+" "+(b.options.className||"")+" "+e),c.renderer.styledMode||(u.css(J({color:r?c.renderer.getContrast(b.color):b.color},f.style||{})),u.attr({opacity:c.renderer.forExport?
1:0,stroke:b.color,"stroke-width":1})),m&&l&&u.css({fontSize:m+b.sum/b.chart.labelSeriesMaxSum*(l-m)+"px"}),u.attr({padding:0,zIndex:3}).add());e=u.getBBox();e.width=Math.round(e.width);for(d=h.length-1;0<d;--d)r?(m=h[d].chartX-e.width/2,l=h[d].chartCenterY-e.height/2,a(m,l,e)&&(n=t(b,m,l,e))):(m=h[d].chartX+3,l=h[d].chartY-e.height-3,a(m,l,e)&&(n=t(b,m,l,e,!0)),n&&x.push(n),m=h[d].chartX+3,l=h[d].chartY+3,a(m,l,e)&&(n=t(b,m,l,e,!0)),n&&x.push(n),m=h[d].chartX-e.width-3,l=h[d].chartY+3,a(m,l,e)&&
(n=t(b,m,l,e,!0)),n&&x.push(n),m=h[d].chartX-e.width-3,l=h[d].chartY-e.height-3,a(m,l,e)&&(n=t(b,m,l,e,!0))),n&&x.push(n);if(f.connectorAllowed&&!x.length&&!r)for(m=g+k-e.width;m>=g;m-=16)for(l=q;l<q+p-e.height;l+=16)(n=t(b,m,l,e,!0))&&x.push(n);if(x.length){if(x.sort(function(b,c){return c.weight-b.weight}),n=x[0],c.boxesToAvoid.push({left:n.x,right:n.x+e.width,top:n.y,bottom:n.y+e.height}),(h=Math.sqrt(Math.pow(Math.abs(n.x-(u.x||0)),2)+Math.pow(Math.abs(n.y-(u.y||0)),2)))&&b.labelBySeries&&(x=
{opacity:c.renderer.forExport?1:0,x:n.x,y:n.y},f={opacity:1},10>=h&&(f={x:x.x,y:x.y},x={}),h=void 0,D&&(h=F(b.options.animation),h.duration*=.2),b.labelBySeries.attr(J(x,{anchorX:n.connectorPoint&&n.connectorPoint.plotX+g,anchorY:n.connectorPoint&&n.connectorPoint.plotY+q})).animate(f,h),b.options.kdNow=!0,b.buildKDTree(),b=b.searchPoint({chartX:n.x,chartY:n.y},!0)))u.closest=[b,n.x-(b.plotX||0),n.y-(b.plotY||0)]}else u&&(b.labelBySeries=u.destroy())}else u&&(b.labelBySeries=u.destroy())}});P(c,"afterDrawSeriesLabels")}
function z(c){function a(b){var a=Math.round(b.plotX/8)+","+Math.round(b.plotY/8);t[a]||(t[a]=1,d.push(b))}if(c.xAxis||c.yAxis){var b=c.points,d=[],f=c.graph||c.area,e=f.element,g=c.chart.inverted,m=c.xAxis,l=c.yAxis,p=g?l.pos:m.pos;g=g?m.pos:l.pos;m=B(c.options.label.onArea,!!c.area);l=l.getThreshold(c.options.threshold);var t={},q;if(c.getPointSpline&&e.getPointAtLength&&!m&&b.length<c.chart.plotSizeX/16){if(f.toD){var k=f.attr("d");f.attr({d:f.toD})}var r=e.getTotalLength();for(q=0;q<r;q+=16)c=
e.getPointAtLength(q),a({chartX:p+c.x,chartY:g+c.y,plotX:c.x,plotY:c.y});k&&f.attr({d:k});c=b[b.length-1];c.chartX=p+c.plotX;c.chartY=g+c.plotY;a(c)}else for(r=b.length,q=0;q<r;q+=1){c=b[q];f=b[q-1];c.chartX=p+c.plotX;c.chartY=g+c.plotY;m&&(c.chartCenterY=g+(c.plotY+B(c.yBottom,l))/2);if(0<q&&(e=Math.abs(c.chartX-f.chartX),k=Math.abs(c.chartY-f.chartY),e=Math.max(e,k),16<e))for(e=Math.ceil(e/16),k=1;k<e;k+=1)a({chartX:f.chartX+k/e*(c.chartX-f.chartX),chartY:f.chartY+k/e*(c.chartY-f.chartY),chartCenterY:f.chartCenterY+
k/e*(c.chartCenterY-f.chartCenterY),plotX:f.plotX+k/e*(c.plotX-f.plotX),plotY:f.plotY+k/e*(c.plotY-f.plotY)});G(c.plotY)&&a(c)}return d}}function A(a){if(this.renderer){var c=this,b=F(c.renderer.globalAnimation).duration;c.labelSeries=[];c.labelSeriesMaxSum=0;p.clearTimeout(c.seriesLabelTimer);c.series.forEach(function(d){var f=d.options.label,e=d.labelBySeries,g=e&&e.closest;f.enabled&&d.visible&&(d.graph||d.area)&&!d.boosted&&(c.labelSeries.push(d),f.minFontSize&&f.maxFontSize&&(d.sum=d.yData.reduce(function(b,
c){return(b||0)+(c||0)},0),c.labelSeriesMaxSum=Math.max(c.labelSeriesMaxSum,d.sum)),"load"===a.type&&(b=Math.max(b,F(d.options.animation).duration)),g&&("undefined"!==typeof g[0].plotX?e.animate({x:g[0].plotX+g[1],y:g[0].plotY+g[2]}):e.attr({opacity:0})))});c.seriesLabelTimer=Q(function(){c.series&&c.labelSeries&&y(c)},c.renderer.forExport||!b?0:b)}}function L(c,a,b,d,f){var e=f&&f.anchorX;f=f&&f.anchorY;var g=b/2;if(G(e)&&G(f)){var m=[["M",e,f]];var l=a-f;0>l&&(l=-d-l);l<b&&(g=e<c+b/2?l:b-l);f>a+
d?m.push(["L",c+g,a+d]):f<a?m.push(["L",c+g,a]):e<c?m.push(["L",c,a+d/2]):e>c+b&&m.push(["L",c+b,a+d/2])}return m||[]}var F=a.animObject,O=r.format,H=d.setOptions,I=v.boxIntersectLine,N=v.intersectRect,K=p.addEvent,J=p.extend,P=p.fireEvent,G=p.isNumber,B=p.pick,Q=p.syncTimeout,C=[];"";return{compose:function(a,d){-1===C.indexOf(a)&&(C.push(a),K(g,"load",A),K(g,"redraw",A));-1===C.indexOf(d)&&(C.push(d),d.prototype.symbols.connector=L);-1===C.indexOf(H)&&(C.push(H),H({plotOptions:{series:{label:M}}}))}}});
r(a,"masters/modules/series-label.src.js",[a["Core/Globals.js"],a["Extensions/SeriesLabel/SeriesLabel.js"]],function(a,g){g.compose(a.Chart,a.SVGRenderer)})});