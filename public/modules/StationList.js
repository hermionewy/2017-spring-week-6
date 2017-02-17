function StationList(){
	var _dis=d3.dispatch('stationselect');

	var exports = function(selection){
		var arr = selection.datum();

		var menuItem = selection.selectAll('li')
			.data(arr,function(d){return d.id});
		menuItem.enter().append('li')
			.append('a')
			.attr('href','#')
			.html(function(d){
				return d.name;
			})
			.on('click',function(d){
				d3.event.preventDefault();
				console.log('StationList:select:'+d.id);
			});
		menuItem.exit().remove();

		selection.insert('li','li')
			.datum(null)
			.append('a')
			.attr('href','#')
			.html('All stations')
			.on('click',function(d){
				d3.event.preventDefault();
			});
			exports.on = function(){
				//usertype = station select
				//callback =function(id){ console.log(id)}

			}
	}

	return exports;
}
