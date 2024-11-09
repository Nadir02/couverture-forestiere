ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:3857").setExtent([-382929.008286, 674054.737872, -376919.701600, 680460.138219]);
var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });

        var lyr_GoogleHybrid_1 = new ol.layer.Tile({
            'title': 'Google Hybrid',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}'
            })
        });
var lyr_rgbComposite_2 = new ol.layer.Image({
                            opacity: 1,
                            title: "rgbComposite",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/rgbComposite_2.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [-382550.000000, 675911.576704, -377340.000000, 679391.123720]
                            })
                        });
var lyr_NDVI_Periode_Seche_2023_3 = new ol.layer.Image({
                            opacity: 1,
                            title: "NDVI_Periode_Seche_2023",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/NDVI_Periode_Seche_2023_3.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [-382550.000000, 675911.576704, -377340.000000, 679391.123720]
                            })
                        });
var lyr_NDVI_Periode_Pluvieuse_2023_4 = new ol.layer.Image({
                            opacity: 1,
                            title: "NDVI_Periode_Pluvieuse_2023",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/NDVI_Periode_Pluvieuse_2023_4.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [-382550.000000, 675911.576704, -377340.000000, 679391.123720]
                            })
                        });
var lyr_NDVI_Periode_Seche_2020_5 = new ol.layer.Image({
                            opacity: 1,
                            title: "NDVI_Periode_Seche_2020",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/NDVI_Periode_Seche_2020_5.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [-382550.000000, 675911.576704, -377340.000000, 679391.123720]
                            })
                        });
var lyr_NDVI_Periode_Pluvieuse_2020_6 = new ol.layer.Image({
                            opacity: 1,
                            title: "NDVI_Periode_Pluvieuse_2020",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/NDVI_Periode_Pluvieuse_2020_6.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [-382550.000000, 675911.576704, -377340.000000, 679391.123720]
                            })
                        });
var lyr_NDVI_Periode_Seche_2016_7 = new ol.layer.Image({
                            opacity: 1,
                            title: "NDVI_Periode_Seche_2016",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/NDVI_Periode_Seche_2016_7.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [-382550.000000, 675911.576704, -377340.000000, 679391.123720]
                            })
                        });
var lyr_NDVI_Periode_Pluvieuse_2016_8 = new ol.layer.Image({
                            opacity: 1,
                            title: "NDVI_Periode_Pluvieuse_2016",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/NDVI_Periode_Pluvieuse_2016_8.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [-382550.000000, 675911.576704, -377340.000000, 679391.123720]
                            })
                        });

        var lyr_GoogleLabels_9 = new ol.layer.Tile({
            'title': 'Google Labels',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=h&x={x}&y={y}&z={z}'
            })
        });
var group_2016 = new ol.layer.Group({
                                layers: [lyr_NDVI_Periode_Seche_2016_7,lyr_NDVI_Periode_Pluvieuse_2016_8,],
                                fold: "open",
                                title: "2016"});
var group_2020 = new ol.layer.Group({
                                layers: [lyr_NDVI_Periode_Seche_2020_5,lyr_NDVI_Periode_Pluvieuse_2020_6,],
                                fold: "open",
                                title: "2020"});
var group_2023 = new ol.layer.Group({
                                layers: [lyr_NDVI_Periode_Seche_2023_3,lyr_NDVI_Periode_Pluvieuse_2023_4,],
                                fold: "open",
                                title: "2023"});

lyr_OSMStandard_0.setVisible(true);lyr_GoogleHybrid_1.setVisible(true);lyr_rgbComposite_2.setVisible(true);lyr_NDVI_Periode_Seche_2023_3.setVisible(true);lyr_NDVI_Periode_Pluvieuse_2023_4.setVisible(true);lyr_NDVI_Periode_Seche_2020_5.setVisible(true);lyr_NDVI_Periode_Pluvieuse_2020_6.setVisible(true);lyr_NDVI_Periode_Seche_2016_7.setVisible(true);lyr_NDVI_Periode_Pluvieuse_2016_8.setVisible(true);lyr_GoogleLabels_9.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_GoogleHybrid_1,lyr_rgbComposite_2,group_2023,group_2020,group_2016,lyr_GoogleLabels_9];
