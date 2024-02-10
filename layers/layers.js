var wms_layers = [];


        var lyr_YandexSatellite_0 = new ol.layer.Tile({
            'title': 'Yandex Satellite',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="">Yandex Satellite</a>',
                url: 'https://core-sat.maps.yandex.net/tiles?l=sat&v=3.1025.0&x={x}&y={y}&z={z}&scale=1&lang=ru_RU'
            })
        });

        var lyr_OSMStandard_1 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_highway_2 = new ol.format.GeoJSON();
var features_highway_2 = format_highway_2.readFeatures(json_highway_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_highway_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_highway_2.addFeatures(features_highway_2);
var lyr_highway_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_highway_2, 
                style: style_highway_2,
                interactive: true,
                title: '<img src="styles/legend/highway_2.png" /> highway'
            });
var format_highway_3 = new ol.format.GeoJSON();
var features_highway_3 = format_highway_3.readFeatures(json_highway_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_highway_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_highway_3.addFeatures(features_highway_3);
var lyr_highway_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_highway_3, 
                style: style_highway_3,
                interactive: true,
                title: '<img src="styles/legend/highway_3.png" /> highway'
            });
var format_building_4 = new ol.format.GeoJSON();
var features_building_4 = format_building_4.readFeatures(json_building_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_building_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_building_4.addFeatures(features_building_4);
var lyr_building_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_building_4, 
                style: style_building_4,
                interactive: true,
                title: '<img src="styles/legend/building_4.png" /> building'
            });
var format_house2building_5 = new ol.format.GeoJSON();
var features_house2building_5 = format_house2building_5.readFeatures(json_house2building_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_house2building_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_house2building_5.addFeatures(features_house2building_5);
var lyr_house2building_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_house2building_5, 
                style: style_house2building_5,
                interactive: true,
                title: '<img src="styles/legend/house2building_5.png" /> house2 — building'
            });
var format_housebuilding_6 = new ol.format.GeoJSON();
var features_housebuilding_6 = format_housebuilding_6.readFeatures(json_housebuilding_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_housebuilding_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_housebuilding_6.addFeatures(features_housebuilding_6);
var lyr_housebuilding_6 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_housebuilding_6, 
                style: style_housebuilding_6,
                interactive: true,
                title: '<img src="styles/legend/housebuilding_6.png" /> house — building'
            });

lyr_YandexSatellite_0.setVisible(true);lyr_OSMStandard_1.setVisible(true);lyr_highway_2.setVisible(true);lyr_highway_3.setVisible(true);lyr_building_4.setVisible(true);lyr_house2building_5.setVisible(true);lyr_housebuilding_6.setVisible(true);
var layersList = [lyr_YandexSatellite_0,lyr_OSMStandard_1,lyr_highway_2,lyr_highway_3,lyr_building_4,lyr_house2building_5,lyr_housebuilding_6];
lyr_highway_2.set('fieldAliases', {'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'highway': 'highway', 'surface': 'surface', 'name:etymology:wikidata': 'name:etymology:wikidata', 'name': 'name', 'ref': 'ref', });
lyr_highway_3.set('fieldAliases', {'fid': 'fid', 'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'highway': 'highway', 'surface': 'surface', 'name:etymology:wikidata': 'name:etymology:wikidata', 'name': 'name', 'ref': 'ref', });
lyr_building_4.set('fieldAliases', {'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'wikipedia': 'wikipedia', 'wikidata': 'wikidata', 'population:date': 'population:date', 'population': 'population', 'place': 'place', 'name:en': 'name:en', 'name': 'name', 'addr:region': 'addr:region', 'addr:district': 'addr:district', 'addr:country': 'addr:country', });
lyr_house2building_5.set('fieldAliases', {'fid': 'fid', 'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'wikipedia': 'wikipedia', 'wikidata': 'wikidata', 'population:date': 'population:date', 'population': 'population', 'place': 'place', 'name:en': 'name:en', 'name': 'name', 'addr:region': 'addr:region', 'addr:district': 'addr:district', 'addr:country': 'addr:country', });
lyr_housebuilding_6.set('fieldAliases', {'fid': 'fid', 'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'building': 'building', 'addr:city': 'addr:city', 'addr:street': 'addr:street', 'addr:housenumber': 'addr:housenumber', 'address': 'address', });
lyr_highway_2.set('fieldImages', {'full_id': '', 'osm_id': '', 'osm_type': '', 'highway': '', 'surface': '', 'name:etymology:wikidata': '', 'name': '', 'ref': '', });
lyr_highway_3.set('fieldImages', {'fid': '', 'full_id': '', 'osm_id': '', 'osm_type': '', 'highway': '', 'surface': '', 'name:etymology:wikidata': '', 'name': '', 'ref': '', });
lyr_building_4.set('fieldImages', {'full_id': '', 'osm_id': '', 'osm_type': '', 'wikipedia': '', 'wikidata': '', 'population:date': '', 'population': '', 'place': '', 'name:en': '', 'name': '', 'addr:region': '', 'addr:district': '', 'addr:country': '', });
lyr_house2building_5.set('fieldImages', {'fid': '', 'full_id': '', 'osm_id': '', 'osm_type': '', 'wikipedia': '', 'wikidata': '', 'population:date': '', 'population': '', 'place': '', 'name:en': '', 'name': '', 'addr:region': '', 'addr:district': '', 'addr:country': '', });
lyr_housebuilding_6.set('fieldImages', {'fid': 'TextEdit', 'full_id': 'TextEdit', 'osm_id': 'TextEdit', 'osm_type': 'TextEdit', 'building': 'TextEdit', 'addr:city': 'TextEdit', 'addr:street': 'TextEdit', 'addr:housenumber': 'TextEdit', 'address': '', });
lyr_highway_2.set('fieldLabels', {'full_id': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', 'highway': 'no label', 'surface': 'no label', 'name:etymology:wikidata': 'no label', 'name': 'no label', 'ref': 'no label', });
lyr_highway_3.set('fieldLabels', {'fid': 'no label', 'full_id': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', 'highway': 'no label', 'surface': 'no label', 'name:etymology:wikidata': 'no label', 'name': 'no label', 'ref': 'no label', });
lyr_building_4.set('fieldLabels', {'full_id': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', 'wikipedia': 'no label', 'wikidata': 'no label', 'population:date': 'no label', 'population': 'no label', 'place': 'no label', 'name:en': 'no label', 'name': 'no label', 'addr:region': 'no label', 'addr:district': 'no label', 'addr:country': 'no label', });
lyr_house2building_5.set('fieldLabels', {'fid': 'no label', 'full_id': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', 'wikipedia': 'no label', 'wikidata': 'no label', 'population:date': 'no label', 'population': 'no label', 'place': 'no label', 'name:en': 'no label', 'name': 'no label', 'addr:region': 'no label', 'addr:district': 'no label', 'addr:country': 'no label', });
lyr_housebuilding_6.set('fieldLabels', {'fid': 'no label', 'full_id': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', 'building': 'no label', 'addr:city': 'no label', 'addr:street': 'no label', 'addr:housenumber': 'no label', 'address': 'no label', });
lyr_housebuilding_6.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});