var wms_layers = [];

        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: '<a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });var format_comedoresactivos_1 = new ol.format.GeoJSON();
var features_comedoresactivos_1 = format_comedoresactivos_1.readFeatures(json_comedoresactivos_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_comedoresactivos_1 = new ol.source.Vector({
    attributions: '<a href=""></a>',
});
jsonSource_comedoresactivos_1.addFeatures(features_comedoresactivos_1);var lyr_comedoresactivos_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_comedoresactivos_1, 
                style: style_comedoresactivos_1,
                title: '<img src="styles/legend/comedoresactivos_1.png" /> comedores activos'
            });var format_comedoresinactivos_2 = new ol.format.GeoJSON();
var features_comedoresinactivos_2 = format_comedoresinactivos_2.readFeatures(json_comedoresinactivos_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_comedoresinactivos_2 = new ol.source.Vector({
    attributions: '<a href=""></a>',
});
jsonSource_comedoresinactivos_2.addFeatures(features_comedoresinactivos_2);var lyr_comedoresinactivos_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_comedoresinactivos_2, 
                style: style_comedoresinactivos_2,
    title: 'comedores inactivos<br />\
    <img src="styles/legend/comedoresinactivos_2_0.png" /> FALTA ENCUESTA<br />\
    <img src="styles/legend/comedoresinactivos_2_1.png" /> INACTIVO<br />'
        });

lyr_OSMStandard_0.setVisible(true);lyr_comedoresactivos_1.setVisible(true);lyr_comedoresinactivos_2.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_comedoresactivos_1,lyr_comedoresinactivos_2];
lyr_comedoresactivos_1.set('fieldAliases', {'Nombre': 'Nombre', 'cant_dias': 'cant_dias', 'ni�os': 'ni�os', 'adultos': 'adultos', 'Almacenaje': 'Almacenaje', 'Luz': 'Luz', 'Gas': 'Gas', 'Agua': 'Agua', 'Mantenimie': 'Mantenimie', 'Nro_trabaj': 'Nro_trabaj', 'Nro_volunt': 'Nro_volunt', 'Apoyo_esco': 'Apoyo_esco', 'DESAYUNO': 'DESAYUNO', 'MERIENDA': 'MERIENDA', 'ALMUERZO': 'ALMUERZO', 'CENA': 'CENA', 'Estado': 'Estado', 'Personas': 'Personas', });
lyr_comedoresinactivos_2.set('fieldAliases', {'Nombre': 'Nombre', 'Estado': 'Estado', });
lyr_comedoresactivos_1.set('fieldImages', {'Nombre': 'TextEdit', 'cant_dias': 'TextEdit', 'ni�os': 'TextEdit', 'adultos': 'TextEdit', 'Almacenaje': 'TextEdit', 'Luz': 'TextEdit', 'Gas': 'TextEdit', 'Agua': 'TextEdit', 'Mantenimie': 'TextEdit', 'Nro_trabaj': 'TextEdit', 'Nro_volunt': 'TextEdit', 'Apoyo_esco': 'TextEdit', 'DESAYUNO': 'TextEdit', 'MERIENDA': 'TextEdit', 'ALMUERZO': 'TextEdit', 'CENA': 'TextEdit', 'Estado': 'TextEdit', 'Personas': 'TextEdit', });
lyr_comedoresinactivos_2.set('fieldImages', {'Nombre': 'TextEdit', 'Estado': 'TextEdit', });
lyr_comedoresactivos_1.set('fieldLabels', {'Nombre': 'no label', 'cant_dias': 'inline label', 'ni�os': 'inline label', 'adultos': 'inline label', 'Almacenaje': 'inline label', 'Luz': 'inline label', 'Gas': 'inline label', 'Agua': 'inline label', 'Mantenimie': 'inline label', 'Nro_trabaj': 'inline label', 'Nro_volunt': 'inline label', 'Apoyo_esco': 'inline label', 'DESAYUNO': 'inline label', 'MERIENDA': 'inline label', 'ALMUERZO': 'inline label', 'CENA': 'inline label', 'Estado': 'inline label', 'Personas': 'inline label', });
lyr_comedoresinactivos_2.set('fieldLabels', {'Nombre': 'no label', 'Estado': 'inline label', });
lyr_comedoresinactivos_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});