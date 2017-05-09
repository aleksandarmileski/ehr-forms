"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.forma = {
    "formId": "form_root",
    "name": "Form root",
    "rmType": "FORM_DEFINITION",
    "viewConfig": {
        "label": {
            "custom": false,
            "value": "",
            "useLocalizations": false,
            "localizationsList": {}
        },
        "size": {
            "field": "inherit",
            "label": "inherit",
            "fill": "inherit"
        },
        "layout": {
            "valign": "inherit",
            "align": "inherit"
        },
        "tags": []
    },
    "templateLanguages": [
        "ar-sy",
        "de",
        "en",
        "es-ar",
        "fa",
        "pt-br",
        "ru",
        "sl"
    ],
    "children": [
        {
            "name": "Body temperature",
            "localizedName": "Body temperature",
            "rmType": "OBSERVATION",
            "nodeId": "openEHR-EHR-OBSERVATION.body_temperature.v1",
            "min": 0,
            "max": -1,
            "localizedNames": {
                "de": "Körpertemperatur",
                "ru": "Температура тела",
                "es-ar": "Temperatura Corporal",
                "pt-br": "Temperatura Corporal",
                "ar-sy": "درجة حرارة الجسم",
                "en": "Body temperature",
                "sl": "Telesna temperatura",
                "fa": "دمای بدن"
            },
            "localizedDescriptions": {
                "de": "Eine Messung der Körpertemperatur an einer bestimmten Stelle als Surrogat für den gesamten Körper der Person.",
                "ru": "Измерение температуры тела, которая является суррогатом температуры тела человека в целом.",
                "es-ar": "La medición de la temperatura corporal, que deriva en la temperatura de todo el cuerpo de una persona.",
                "pt-br": "O valor para a temperatura corporal, com valor médio equivalente para o corpo inteiro.",
                "ar-sy": "قياس لدرجة حرارة الجسم, و التي تحل كبديل لدرجة الحرارة الكلية لجسم الشخص",
                "en": "A measurement of the body temperature, which is a surrogate for the whole body temperature of the person.",
                "sl": "*A measurement of the body temperature, which is a surrogate for the whole body temperature of the person.(en)",
                "fa": "اندازه گیری دمای بدن که جایگزینی برای دمای کل بدن فرد است"
            },
            "aqlPath": "/content[openEHR-EHR-OBSERVATION.body_temperature.v1]",
            "children": [
                {
                    "name": "Any event",
                    "localizedName": "Any event",
                    "rmType": "EVENT",
                    "nodeId": "at0003",
                    "min": 0,
                    "max": -1,
                    "localizedNames": {
                        "de": "Any event",
                        "ru": "Любое событие",
                        "es-ar": "Cualquier evento",
                        "pt-br": "Qualquer evento",
                        "ar-sy": "إحدى الوقائع",
                        "en": "Any event",
                        "sl": "Any event",
                        "fa": "هر رویداد"
                    },
                    "localizedDescriptions": {
                        "de": "Any event.",
                        "ru": "Любое событие.",
                        "es-ar": "Cualquier evento",
                        "pt-br": "Qualquer evento.",
                        "ar-sy": "إحدى الوقائع",
                        "en": "Any event.",
                        "sl": "*Any event(en)",
                        "fa": "هر رویداد"
                    },
                    "aqlPath": "/content[openEHR-EHR-OBSERVATION.body_temperature.v1]/data[at0002]/events[at0003]",
                    "children": [
                        {
                            "name": "Temperature",
                            "localizedName": "Temperature",
                            "rmType": "DV_QUANTITY",
                            "nodeId": "at0004",
                            "min": 1,
                            "max": 1,
                            "localizedNames": {
                                "de": "Temperatur",
                                "ru": "Температура(ru)",
                                "es-ar": "Temperatura",
                                "pt-br": "Temperatura",
                                "ar-sy": "درجة الحرارة",
                                "en": "Temperature",
                                "sl": "Telesna temperatura",
                                "fa": "دما"
                            },
                            "localizedDescriptions": {
                                "de": "Die gemessene Körpertemperatur (als Surrogat für den gesamten Körper).",
                                "ru": "Измеряется температура тела (как суррогат для всего тела).",
                                "es-ar": "La temperatura corporal medida (representa la temperatura de todo el cuerpo).",
                                "pt-br": "A temperatura corporal aferida (média para o corpo inteiro).",
                                "ar-sy": "درجة الحرارة التي تم قياسها - كبديل عن الجسم الكلي",
                                "en": "The measured body temperature (as a surrogate for the whole body).",
                                "sl": "*The measured body temperature (as a surrogate for the whole body)(en)",
                                "fa": "دمای اندازه گیری شده از بدن (به عنوان جایگزینی برای کل بدن)٬"
                            },
                            "aqlPath": "/content[openEHR-EHR-OBSERVATION.body_temperature.v1]/data[at0002]/events[at0003]/data[at0001]/items[at0004]/value",
                            "inputs": [
                                {
                                    "suffix": "magnitude",
                                    "type": "DECIMAL"
                                },
                                {
                                    "suffix": "unit",
                                    "type": "CODED_TEXT",
                                    "list": [
                                        {
                                            "value": "°C",
                                            "label": "°C",
                                            "validation": {
                                                "precision": {
                                                    "minOp": ">=",
                                                    "min": 1,
                                                    "maxOp": "<=",
                                                    "max": 1
                                                }
                                            }
                                        },
                                        {
                                            "value": "°F",
                                            "label": "°F",
                                            "validation": {
                                                "precision": {
                                                    "minOp": ">=",
                                                    "min": 1,
                                                    "maxOp": "<=",
                                                    "max": 1
                                                }
                                            }
                                        }
                                    ]
                                }
                            ],
                            "formId": "vital_signs/body_temperature/any_event/temperature",
                            "viewConfig": {
                                "field": {
                                    "unit": {
                                        "presentation": "combobox"
                                    }
                                },
                                "size": {
                                    "field": "inherit",
                                    "label": "inherit",
                                    "fill": "inherit"
                                },
                                "layout": {
                                    "field": {
                                        "valign": "inherit",
                                        "align": "inherit"
                                    }
                                }
                            }
                        },
                        {
                            "name": "Body exposure",
                            "localizedName": "Body exposure",
                            "rmType": "DV_CODED_TEXT",
                            "nodeId": "at0030",
                            "min": 0,
                            "max": 1,
                            "dependsOn": [
                                "temperature"
                            ],
                            "localizedNames": {
                                "de": "Körperexposition",
                                "ru": "*Body exposure(en)",
                                "es-ar": "Exposición corporal",
                                "pt-br": "Exposição do corpo",
                                "ar-sy": "تَعَرُّض الجسم",
                                "en": "Body exposure",
                                "sl": "Obleka",
                                "fa": "نحوه پوشش بدن"
                            },
                            "localizedDescriptions": {
                                "de": "Die thermale Situation der Person, deren Temperatur gemessen wird.",
                                "ru": "*The thermal situation of the person who is having the temperature taken(en)",
                                "es-ar": "La situación térmica de la persona al cual se le registra la temperatura.",
                                "pt-br": "A situação térmica da pessoa que tem a sua temperatura aferida.",
                                "ar-sy": "الموقف الحراري للشخص الذي يتم قياس درجة حرارته",
                                "en": "The thermal situation of the person who is having the temperature taken.",
                                "sl": "*The thermal situation of the person who is having the temperature taken(en)",
                                "fa": "وضعیت گرمایی (به لحاظ پوشش) فردی که دمایش گرفته شده است"
                            },
                            "aqlPath": "/content[openEHR-EHR-OBSERVATION.body_temperature.v1]/data[at0002]/events[at0003]/state[at0029]/items[at0030]/value",
                            "inputs": [
                                {
                                    "suffix": "code",
                                    "type": "CODED_TEXT",
                                    "list": [
                                        {
                                            "value": "at0031",
                                            "label": "Naked",
                                            "localizedLabels": {
                                                "de": "Nackt",
                                                "ru": "Обнажён",
                                                "es-ar": "Desnudo",
                                                "pt-br": "Despido",
                                                "ar-sy": "مُعرَّى",
                                                "en": "Naked",
                                                "sl": "Gol",
                                                "fa": "لخت"
                                            },
                                            "localizedDescriptions": {
                                                "de": "Keine Kleidung, Bettzeug oder andere Bedeckung.",
                                                "ru": "Без одежды, ничем не укрыт.",
                                                "es-ar": "Sin ropas, sabanas o coberturas.",
                                                "pt-br": "Sem roupas, camisola ou capa.",
                                                "ar-sy": "لا يوجد ملابس أو شراشف أو غطاء",
                                                "en": "No clothing, bedding or covering.",
                                                "sl": "*No clothing, bedding or covering(en)",
                                                "fa": "بدون لباس ، ملافه و یا پوشش\n"
                                            }
                                        },
                                        {
                                            "value": "at0032",
                                            "label": "Reduced clothing/bedding",
                                            "localizedLabels": {
                                                "de": "Verminderte Kleidung/Bettzeug",
                                                "ru": "Лёгкая одежда/постель",
                                                "es-ar": "Ropas/lecho reducidas",
                                                "pt-br": "Vestuário reduzido/camisola",
                                                "ar-sy": "ملابس/ شراشف خفيفة",
                                                "en": "Reduced clothing/bedding",
                                                "sl": "Premalo oblečen (zavit)",
                                                "fa": "لباس و یا ملافه کم"
                                            },
                                            "localizedDescriptions": {
                                                "de": "Die Person wird bedeckt von einer geringeren Menge an Kleidung oder Bettzeug als für die Umgebungsbedingungen angemessen erscheint.",
                                                "ru": "На пациенте меньшее количество одежды / постельных принадлежностей, чем этого требуют условия внешней среды.",
                                                "es-ar": "La persona esta cubierto por una cantidad menor de ropas o sabanas que lo considerado apropiado para las circunstancias ambientales.",
                                                "pt-br": "A pessoa está vestida por pouca roupa ou camisola considerado o vestuário necessário para as circunstâncias ambientais.",
                                                "ar-sy": "الشخص مُغَطَّى بكمية من الملابس أو الشراشف أقل من تلك المناسبة للظروف البيئية المحيطة",
                                                "en": "The person is covered by a lesser amount of clothing or bedding than deemed appropriate for the environmental circumstances.",
                                                "sl": "*The person is covered by a lesser amount of clothing or bedding than deemed appropriate for the environmental circumstances(en)",
                                                "fa": "فرد با مقدار لباس و یا ملافه کمتر از حد مناسب با شرایط محیطی پوشانده شده است"
                                            }
                                        },
                                        {
                                            "value": "at0033",
                                            "label": "Appropriate clothing/bedding",
                                            "localizedLabels": {
                                                "de": "Angemessene Kleidung/Bettzeug",
                                                "ru": "Соответствующая одежда/постель",
                                                "es-ar": "Ropas/lecho apropiadas",
                                                "pt-br": "Apropriadamente vestido",
                                                "ar-sy": "ملابس/شراشف مناسبة",
                                                "en": "Appropriate clothing/bedding",
                                                "sl": "Primerno oblečen (zavit)",
                                                "fa": "لباس یا ملافه مناسب"
                                            },
                                            "localizedDescriptions": {
                                                "de": "Die Person wird bedeckt von einer Menge an Kleidung oder Bettzeug, die den Umgebungsbedingungen angemessen erscheint.",
                                                "ru": "Одежда/постельные принадлежности пациента соответствуют условиям внешней среды.",
                                                "es-ar": "La persona esta cubierta por una adecuada cantidad de ropas o sabanas, que lo considerado apropiado para las circunstancias ambientales.",
                                                "pt-br": "A pessoa está vestida apropriadamente considerado o vestuário necessário para as circunstâncias ambientais.",
                                                "ar-sy": "الشخص مُغَطَّى بكمية من الملابس أو الشراشف المناسبة للظروف البيئية المحيطة",
                                                "en": "The person is covered by an amount of clothing or bedding deemed appropriate for the environmental circumstances.",
                                                "sl": "*The person is covered by an amount of clothing or bedding deemed appropriate for the environmental circumstances(en)",
                                                "fa": "فرد با لباس و یا ملافه مناسب با شرایط محیطی پوشانده شده است"
                                            }
                                        },
                                        {
                                            "value": "at0034",
                                            "label": "Increased clothing/bedding",
                                            "localizedLabels": {
                                                "de": "Erhöhte Kleidung/Bettzeug",
                                                "ru": "Теплая одежда/постель",
                                                "es-ar": "Ropas/lecho aumentado",
                                                "pt-br": "Excessivamente vestido",
                                                "ar-sy": "ملابس/شراشف زائدة",
                                                "en": "Increased clothing/bedding",
                                                "sl": "Preveč oblečen (zavit)",
                                                "fa": "لباس و یا ملافه زیاد"
                                            },
                                            "localizedDescriptions": {
                                                "de": "Die Person wird bedeckt von einer größeren Menge an Kleidung oder Bettzeug als für die Umgebungsbedingungen angemessen erscheint.",
                                                "ru": "На пациенте большее количество одежды / постельных принадлежностей, чем этого требуют условия внешней среды.",
                                                "es-ar": "La persona se encuentra cubierto por una cantidad incrementada de ropas o sabanas que lo considerado apropiado para las circunstancias ambientales.",
                                                "pt-br": "A pessoa está excessivamente vestida considerado o vestuário necessário para as circunstâncias ambientais.",
                                                "ar-sy": "الشخص مُغَطَّى بكمية زائدة من الملابس/ الشراشف المناسبة للظروف البيئية المحيطة",
                                                "en": "The person is covered by an increased amount of clothing or bedding than deemed appropriate for the environmental circumstances.",
                                                "sl": "*The person is covered by an increased amount of clothing or bedding than deemed appropriate for the environmental circumstances(en)",
                                                "fa": "فرد با مقدار لباس و یا ملافه بیشتر از حد مناسب با شرایط محیطی پوشانده شده است"
                                            }
                                        }
                                    ],
                                    "defaultValue": "at0033"
                                }
                            ],
                            "formId": "vital_signs/body_temperature/any_event/body_exposure",
                            "viewConfig": {
                                "size": {
                                    "field": "inherit",
                                    "label": "inherit",
                                    "fill": "inherit"
                                },
                                "layout": {
                                    "field": {
                                        "valign": "inherit",
                                        "align": "inherit"
                                    }
                                }
                            }
                        },
                        {
                            "name": "Description of thermal stress",
                            "localizedName": "Description of thermal stress",
                            "rmType": "DV_TEXT",
                            "nodeId": "at0041",
                            "min": 0,
                            "max": 1,
                            "dependsOn": [
                                "temperature"
                            ],
                            "localizedNames": {
                                "de": "Beschreibung der Wärmebelastung",
                                "ru": "Тепловой стресс",
                                "es-ar": "Descripción de estrés térmico",
                                "pt-br": "Choque térmico",
                                "ar-sy": "وصف الضغط الحرارة",
                                "en": "Description of thermal stress",
                                "sl": "Opis",
                                "fa": "توصیف استرسهای گرمایی"
                            },
                            "localizedDescriptions": {
                                "de": "Beschreibung von Bedingungen, denen die Person ausgesetzt ist, welche die gemessene Körpertemperatur beeinflussen könnten.",
                                "ru": "Описание особенностей, которые могут повлиять на результат измерения температуры тела.",
                                "es-ar": "Descripción de las condiciones que le suceden al sujeto que puede influenciar la temperatura corporal medida.",
                                "pt-br": "Descrição das condições aplicadas ao sujeito que possa influenciar a medida de sua temperatura corporal.",
                                "ar-sy": "وصف للظروف المُطبَّقة على المريض و التي قد تؤثر على درجة الحرارة التي يتم قياسها",
                                "en": "Description of the conditions applied to the subject that might influence their measured body temperature.",
                                "sl": "*Description of the conditions applied to the subject that might influence their measured body temperature.(en)",
                                "fa": "توصیف شرایط اعمال شده به شخص که ممکن است اندازه گیری دمای بدن فرد را تحت تاثیر قرار دهد"
                            },
                            "aqlPath": "/content[openEHR-EHR-OBSERVATION.body_temperature.v1]/data[at0002]/events[at0003]/state[at0029]/items[at0041]/value",
                            "inputs": [
                                {
                                    "type": "TEXT"
                                }
                            ],
                            "formId": "vital_signs/body_temperature/any_event/description_of_thermal_stress",
                            "viewConfig": {
                                "size": {
                                    "field": "inherit",
                                    "label": "inherit",
                                    "fill": "inherit"
                                },
                                "layout": {
                                    "field": {
                                        "valign": "inherit",
                                        "align": "inherit"
                                    }
                                }
                            }
                        }
                    ],
                    "formId": "vital_signs/body_temperature/any_event",
                    "viewConfig": {
                        "size": {
                            "field": "inherit",
                            "label": "inherit",
                            "fill": "inherit"
                        },
                        "layout": {
                            "field": {
                                "valign": "inherit",
                                "align": "inherit"
                            }
                        }
                    }
                },
                {
                    "name": "Site of measurement",
                    "localizedName": "Site of measurement",
                    "rmType": "DV_CODED_TEXT",
                    "nodeId": "at0021",
                    "min": 0,
                    "max": 1,
                    "dependsOn": [
                        "any_event"
                    ],
                    "localizedNames": {
                        "de": "Messstelle",
                        "ru": "Место измерения",
                        "es-ar": "Sitio de la medición",
                        "pt-br": "Local da medida",
                        "ar-sy": "موضع القياس",
                        "en": "Site of measurement",
                        "sl": "Stran telesa",
                        "fa": "محل اندازه گیری"
                    },
                    "localizedDescriptions": {
                        "de": "Die anatomische Stelle der Temperaturmessung.",
                        "ru": "Анатомическое место измернеия температуры.",
                        "es-ar": "El sitio anatómico donde se mide la temperatura.",
                        "pt-br": "O local anatômico de onde a temperatura foi aferida.",
                        "ar-sy": "الموضع التشريحي الذي يتم فيه قياس درجة الحرارة",
                        "en": "The anatomical site of measurement of the temperature.",
                        "sl": "*The anatomical site of measurement of the temperature(en)",
                        "fa": "محل آناتومیکی اندازه گیری دمای بدن"
                    },
                    "aqlPath": "/content[openEHR-EHR-OBSERVATION.body_temperature.v1]/protocol[at0020]/items[at0021]/value",
                    "inputs": [
                        {
                            "suffix": "code",
                            "type": "CODED_TEXT",
                            "list": [
                                {
                                    "value": "at0022",
                                    "label": "Mouth",
                                    "localizedLabels": {
                                        "de": "Mund",
                                        "ru": "Рот",
                                        "es-ar": "Boca",
                                        "pt-br": "Boca",
                                        "ar-sy": "الفم",
                                        "en": "Mouth",
                                        "sl": "Usta",
                                        "fa": "ماه"
                                    },
                                    "localizedDescriptions": {
                                        "de": "Messung der Temperatur im Mund.",
                                        "ru": "Температура измеряется в ротовой полости.",
                                        "es-ar": "Temperatura bucal.",
                                        "pt-br": "A temperatura é eferida no interior da boca.",
                                        "ar-sy": "يتم قياس الحرارة في داخل الفم",
                                        "en": "Temperature is measured within the mouth.",
                                        "sl": "*Temperature is measured within the mouth(en)",
                                        "fa": "دما در عرض یک ماه اندازه گیری می شود"
                                    }
                                },
                                {
                                    "value": "at0023",
                                    "label": "Ear canal",
                                    "localizedLabels": {
                                        "de": "Ohrenkanal",
                                        "ru": "Наружный слуховой проход",
                                        "es-ar": "Canal auditivo",
                                        "pt-br": "Canal auditivo",
                                        "ar-sy": "قناة الأذن",
                                        "en": "Ear canal",
                                        "sl": "V ušesu",
                                        "fa": "کانال گوش"
                                    },
                                    "localizedDescriptions": {
                                        "de": "Messung der Temperatur innerhalb des äußeren Gehörgangs.",
                                        "ru": "Температура измеряется в наружном слуховом проходе.",
                                        "es-ar": "La temperatura se mide en el canal auditivo externo.",
                                        "pt-br": "A temperatura é aferida dentro do canal auditivo do ouvido externo (conduto auditivo).",
                                        "ar-sy": "يتم قياس درجة الحرارة من داخل القناة السمعية الخارجية",
                                        "en": "Temperature is measured from within the external auditory canal.",
                                        "sl": "*Temperature is measured from within the external auditory canal(en)",
                                        "fa": "دما از طریق کانال شنوایی خارجی اندازه گیری می شود"
                                    }
                                },
                                {
                                    "value": "at0024",
                                    "label": "Axilla",
                                    "localizedLabels": {
                                        "de": "Achselhöhle",
                                        "ru": "Подмышечная впадина",
                                        "es-ar": "Axila",
                                        "pt-br": "Axilla",
                                        "ar-sy": "الإبط",
                                        "en": "Axilla",
                                        "sl": "Pod pazduho",
                                        "fa": "زیر بغل"
                                    },
                                    "localizedDescriptions": {
                                        "de": "Messung der Temperatur an der Haut der Achselhöhle mit seitlich angelegtem Arm.",
                                        "ru": "Температура измеряется в кожной складке в подмышечной впадине, рука опущена вниз и прижата к туловищу.",
                                        "es-ar": "La temperatura se mide en el hueco axilar con el brazo posicionado al costado del cuerpo.",
                                        "pt-br": "A temperatura é aferida na pele da axila com o braço abaixado.",
                                        "ar-sy": "يتم قياس درجة الحرارة من بشرة/ جلد الإبط في حالة وضع الذراع جانبا و هو متجه إلى أسفل",
                                        "en": "Temperature is measured from the skin of the axilla with the arm positioned down by the side.",
                                        "sl": "*Temperature is measured from the skin of the axilla with the arm positioned down by the side(en)",
                                        "fa": "دما از طریق پوستی و در زیر بغل، بصورتی که بازو پایین و در کنار بدن باشد، اندازه گیری می شود"
                                    }
                                },
                                {
                                    "value": "at0025",
                                    "label": "Rectum",
                                    "localizedLabels": {
                                        "de": "Rektum",
                                        "ru": "Прямая кишка",
                                        "es-ar": "Recto",
                                        "pt-br": "Reto",
                                        "ar-sy": "المستقيم",
                                        "en": "Rectum",
                                        "sl": "Rektalno",
                                        "fa": "مقعد"
                                    },
                                    "localizedDescriptions": {
                                        "de": "Messung der Temperatur innerhalb des Rektums.",
                                        "ru": "Температура измеряется внутри прямой кишки.",
                                        "es-ar": "Temperatura rectal.",
                                        "pt-br": "A temperatura é aferida no reto.",
                                        "ar-sy": "درجة الحرارة التي يتم قياسها في داخل المستقيم",
                                        "en": "Temperature measured within the rectum.",
                                        "sl": "*Temperature measured within the rectum(en)",
                                        "fa": "دما از طریق مقعد اندازه گیری می شود"
                                    }
                                },
                                {
                                    "value": "at0026",
                                    "label": "Nasopharynx",
                                    "localizedLabels": {
                                        "de": "Nasopharynx",
                                        "ru": "Носоглотка",
                                        "es-ar": "Nasofaríngeo",
                                        "pt-br": "Nasofaringe",
                                        "ar-sy": "البلعوم الأنفي",
                                        "en": "Nasopharynx",
                                        "sl": "Nazofarinks",
                                        "fa": "بینی حلقی"
                                    },
                                    "localizedDescriptions": {
                                        "de": "Messung der Temperatur innerhalb des Nasopharynxs (Nasenrachens).",
                                        "ru": "Температура измеряется в носоглотке.",
                                        "es-ar": "La temperatura se mide dentro de la nasofaringe.",
                                        "pt-br": "A temperatura é aferida na parte nasal da faringe.",
                                        "ar-sy": "درجة الحرارة التي يتم قياسها من داخل البلعوم الأنفي",
                                        "en": "Temperature is measured within the nasopharynx.",
                                        "sl": "*Temperature is measured within the nasopharynx(en)",
                                        "fa": "دما از طریق بینی حلقی اندازه گیری می شود"
                                    }
                                },
                                {
                                    "value": "at0027",
                                    "label": "Urinary bladder",
                                    "localizedLabels": {
                                        "de": "Harnblase",
                                        "ru": "Мочевой пузырь",
                                        "es-ar": "Vejiga urinaria",
                                        "pt-br": "Bexiga",
                                        "ar-sy": "المثانة البولية",
                                        "en": "Urinary bladder",
                                        "sl": "Sečni mehur",
                                        "fa": "مثانه"
                                    },
                                    "localizedDescriptions": {
                                        "de": "Messung der Temperatur in der Harnblase.",
                                        "ru": "Температура измеряется внутри мочевого пузыря.",
                                        "es-ar": "La temperatura se mide en la vejiga urinaria.",
                                        "pt-br": "A temperatura é aferida na bexiga.",
                                        "ar-sy": "يتم قياس درجة الحرارة من داخل المثانة البولية",
                                        "en": "Temperature is measured in the urinary bladder.",
                                        "sl": "*Temperature is measured in the urinary bladder(en)",
                                        "fa": "دما از طریق مثانه اندازه گیری می شود"
                                    }
                                },
                                {
                                    "value": "at0028",
                                    "label": "Intravascular",
                                    "localizedLabels": {
                                        "de": "Intravaskulär",
                                        "ru": "Внутрисосудистая",
                                        "es-ar": "Intravascular",
                                        "pt-br": "Intravascular",
                                        "ar-sy": "داخل الأوعية الدموية",
                                        "en": "Intravascular",
                                        "sl": "Intravaskularno",
                                        "fa": "داخل عروقی"
                                    },
                                    "localizedDescriptions": {
                                        "de": "Messung der Temperatur innerhalb des vaskulären Systems.",
                                        "ru": "Температура измеряется внутри сосоудистого русла.",
                                        "es-ar": "La temperatura se mide dentro del sistema vascular.",
                                        "pt-br": "A temperatura é aferida no sistema vascular.",
                                        "ar-sy": "يتم قياس درجة الحرارة من داخل الجهاز الدوري - الأوعية الدموية",
                                        "en": "Temperature is measured within the vascular system.",
                                        "sl": "*Temperature is measured within the vascular system(en)",
                                        "fa": "دما از طریق سیستم عروقی اندازه گیری می شود"
                                    }
                                },
                                {
                                    "value": "at0043",
                                    "label": "Skin",
                                    "localizedLabels": {
                                        "de": "Haut",
                                        "ru": "Кожа",
                                        "es-ar": "Piel",
                                        "pt-br": "Pele",
                                        "ar-sy": "الجلد/ البشرة",
                                        "en": "Skin",
                                        "sl": "Na koži",
                                        "fa": "پوست"
                                    },
                                    "localizedDescriptions": {
                                        "de": "Messung der Temperatur an freiliegender Haut.",
                                        "ru": "Температура измеряется на поверхности кожи.",
                                        "es-ar": "La temperatura se mide sobre la piel expuesta.",
                                        "pt-br": "A temperatura é aferida a partir da pele exposta.",
                                        "ar-sy": "يتم قياس درجة الحرارة من الجلد المُعَرَّض/ المكشوف",
                                        "en": "Temperature is measured from exposed skin.",
                                        "sl": "*Temperature is measured from exposed skin(en)",
                                        "fa": "دما از طریق پوست بدن اندازه گیری می شود"
                                    }
                                },
                                {
                                    "value": "at0051",
                                    "label": "Vagina",
                                    "localizedLabels": {
                                        "de": "Vagina",
                                        "ru": "Влагалище",
                                        "es-ar": "Vagina",
                                        "pt-br": "Vagina",
                                        "ar-sy": "المهبل",
                                        "en": "Vagina",
                                        "sl": "Vaginalno",
                                        "fa": "مهبل"
                                    },
                                    "localizedDescriptions": {
                                        "de": "Messung der Temperatur innerhalb der Vagina.",
                                        "ru": "Температура измеряется внутри влагвалища.",
                                        "es-ar": "Temperatura vaginal.",
                                        "pt-br": "A temperatura é afereida no interior da vagina.",
                                        "ar-sy": "يتم قياس درجة الحرارة من داخل المهبل",
                                        "en": "Temperature is measured within the vagina.",
                                        "sl": "*Temperature is measured within the vagina(en)",
                                        "fa": "دما از  طریق داخل مهبل اندازه گیری می شود"
                                    }
                                },
                                {
                                    "value": "at0054",
                                    "label": "Oesophagus",
                                    "localizedLabels": {
                                        "de": "Oesophagus",
                                        "ru": "Пищевод",
                                        "es-ar": "Esófago",
                                        "pt-br": "Esófago",
                                        "ar-sy": "المريئ",
                                        "en": "Oesophagus",
                                        "sl": "V požiralniku",
                                        "fa": "مری"
                                    },
                                    "localizedDescriptions": {
                                        "de": "Messung der Temperatur innerhalb des Oesophagus.",
                                        "ru": "Температура измеряется внитри пищевода.",
                                        "es-ar": "Temperatura se mide dentro del esófago.",
                                        "pt-br": "A temperatura é aferida no esófago.",
                                        "ar-sy": "يتم قياس درجة الحرارة من داخل المريئ",
                                        "en": "Temperatue is measured within the oesophagus.",
                                        "sl": "*Temperatue is measured within the oesophagus(en)",
                                        "fa": "دما از طریق داخل مری اندازه گیری می شود"
                                    }
                                },
                                {
                                    "value": "at0055",
                                    "label": "Inguinal skin crease",
                                    "localizedLabels": {
                                        "de": "Inguinale Hautfalte",
                                        "ru": "Паховая складка",
                                        "es-ar": "Pliegue inguinal",
                                        "pt-br": "Região Inguinal",
                                        "ar-sy": "غضن الجلد عند الأربتين",
                                        "en": "Inguinal skin crease",
                                        "sl": "V ustih",
                                        "fa": "چین پوستی کشاله رانی"
                                    },
                                    "localizedDescriptions": {
                                        "de": "Messung der Temperatur in der inguinalen Hautfalte zwischen Bein und Abdominalwand.",
                                        "ru": "Температура измеряется в паховой складке кожи между ногой и передней брюшной стенкой.",
                                        "es-ar": "La temperatura se mide en el pliegue inguinal entre el muslo y la pared abdominal.",
                                        "pt-br": "A temperatura é aferida na dobra da pele entre a região inguinal e a região abdominal.",
                                        "ar-sy": "يتم قياس درجة الحرارة عند غضن الجلد بين الأربتين - بين الرجل و جدار البطن",
                                        "en": "Temperature is measured in the inguinal skin crease between the leg and abdominal wall.",
                                        "sl": "*Temperature is measured in the inguinal skin crease between the leg and abdominal wall(en)",
                                        "fa": "دما از طریق چین پوستی کشاله ران بین ران و دیواره شکم اندازه گیری می شود"
                                    }
                                }
                            ]
                        }
                    ],
                    "formId": "vital_signs/body_temperature/site_of_measurement",
                    "viewConfig": {
                        "size": {
                            "field": "inherit",
                            "label": "inherit",
                            "fill": "inherit"
                        },
                        "layout": {
                            "field": {
                                "valign": "inherit",
                                "align": "inherit"
                            }
                        }
                    }
                }
            ],
            "formId": "vital_signs/body_temperature",
            "viewConfig": {
                "size": {
                    "field": "inherit",
                    "label": "inherit",
                    "fill": "inherit"
                },
                "layout": {
                    "field": {
                        "valign": "inherit",
                        "align": "inherit"
                    }
                }
            }
        }
    ]
};
