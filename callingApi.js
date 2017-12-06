module.exports = {
  
   
    "quote_id": "026b6a8a-7879-4c69-950e-242ff85231ce",
    "errors": {},
    "data": {
       "quote_form": {
          "salary": 1000000,
          "tobacco_user": false,
          "is_nri": false,
          "mobile": "9999988888",
          "gender": "M",
          "age": 25,
          "sum_assured": 25000000,
          "premium_frequency": "Y",
          "state": "",
          "maturity_age": 50,
          "email": ""
       },
       "is_mobile": false,
       "plan_list": {
          "Y": [
             {
                "features": {
                   "free": [],
                   "paid": [
                      {
                         "premium": 590,
                         "description": "In addition to the sum assured, an additional amount will be given in the case of death due to an accident.",
                         "validations": [
                            {
                               "message": "Please enter the expected cover amount.",
                               "name": "required"
                            },
                            {
                               "message": "The minimum eligible accidental death cover is Rs. 10,000.",
                               "name": "minValue",
                               "minValue": 10000
                            },
                            {
                               "message": "The maximum eligible accidental death cover is Rs. 22,000,000.",
                               "name": "maxValue",
                               "maxValue": 22000000
                            }
                         ],
                         "messages": [],
                         "sum_assured": 1000000,
                         "is_applied": false,
                         "slug": "accidental-death",
                         "name": "Accidental death"
                      },
                      {
                         "premium": 238,
                         "description": "A benefit wherein the future premium payments by the insured are waived off under certain conditions",
                         "validations": [],
                         "messages": [],
                         "is_applied": false,
                         "slug": "waiver-of-premium",
                         "name": "Waiver of premium"
                      }
                   ]
                },
                "rank": 1,
                "frequency": [
                   "Y"
                ],
                "id": 42,
                "base_premium": {
                   "Y": {
                      "value": 11646,
                      "label": "11,646"
                   }
                },
                "is_medical_required": true,
                "buy_url": "https://www.edelweisstokio.in/total-secure-plus/buy?src=A5A007",
                "premium": {
                   "Y": {
                      "value": 11646,
                      "label": "11,646.0"
                   }
                },
                "insurer": {
                   "claims_settled": 93.29,
                   "name": "Edelweiss Tokio",
                   "policy_wording": {
                      "document": "uploads/life_product/policy_wording_documents/Edelweiss_Tokio_Life_Brochure.pdf"
                   },
                   "logo": "https://media.coverfox.com/uploads/life_product/insurer/edelweiss-tokio/logo.png",
                   "about_us": [
                      "Edelweiss Tokio Life Insurance is a new generation Insurance Company, set up with a start up capital of INR 550 Crores, thereby showing our commitment to building a long term sustainable business focused on a consumer centric approach.",
                      "The company is a joint venture between Edelweiss Financial Services, one of India's leading diversified financial services companies with business straddling across Credit, Capital Markets, Asset Management, Housing finance and Insurance and Tokio Marine Holdings Inc, one of the oldest and the biggest Insurance companies in Japan now with presence across 39 countries around the world."
                   ],
                   "complaints_pending": 0.91,
                   "slug": "edelweiss-tokio"
                },
                "unmatched_params": {
                   "sum_assured": "This is the maximum available cover in Edelweiss Tokio for you."
                },
                "sum_assured": {
                   "value": 2.2E7,
                   "label": "2.2 crores"
                },
                "notifications": [],
                "grace_period": 30,
                "policy_issuance_tat": 15,
                "term": 25,
                "name": "Total Secure+",
                "is_integrated": true,
                "planquote_id": "",
                "medical_required_condition": "Medical screening subject to underwriting norms.",
                "policy_wording": "https://media.coverfox.com/uploads/life_product/policy_wording_documents/Edelweiss_Tokio_Total_Secure_plus_brochure.pdf",
                "exclusions": [
                   ""
                ]
             },
             {
                "features": {
                   "free": [
                      {
                         "slug": "terminal-illness",
                         "is_applied": false,
                         "description": "",
                         "name": "Terminal illness"
                      },
                      {
                         "slug": "life-stage-benefit",
                         "is_applied": false,
                         "description": "",
                         "name": "Life Stage Benefit"
                      }
                   ],
                   "paid": [
                      {
                         "premium": 531,
                         "description": "In addition to the sum assured, an additional amount will be given in the case of death due to an accident.",
                         "validations": [
                            {
                               "message": "Please enter the expected cover amount.",
                               "name": "required"
                            },
                            {
                               "message": "The minimum eligible accidental death cover is Rs. 1,000,000.",
                               "name": "minValue",
                               "minValue": 1000000
                            },
                            {
                               "message": "The maximum eligible accidental death cover is Rs. 7,277,000.",
                               "name": "maxValue",
                               "maxValue": 7277000
                            }
                         ],
                         "messages": [],
                         "sum_assured": 1000000,
                         "is_applied": false,
                         "slug": "accidental-death",
                         "name": "Accidental death"
                      },
                      {
                         "premium": 94,
                         "description": "A benefit wherein the future premium payments by the insured are waived off under certain conditions",
                         "validations": [],
                         "messages": [],
                         "is_applied": false,
                         "slug": "waiver-of-premium",
                         "name": "Waiver of premium"
                      },
                      {
                         "slug": "idisability",
                         "is_applied": false,
                         "description": "A benefit wherein the future premium payments by the insured are waived off due to disability caused by accident.",
                         "name": "iDisability"
                      }
                   ]
                },
                "rank": 1,
                "frequency": [
                   "Y",
                   "H",
                   "M"
                ],
                "id": 41,
                "base_premium": {
                   "Y": {
                      "value": 12880,
                      "label": "12,880"
                   }
                },
                "is_medical_required": true,
                "buy_url": "https://www.aegonlife.com/LeadApi/API/string?productid=1&Source=Coverfox&name={name}&mobile={mobile}&flowtype=DIRECT&sourcekey=iT|Referral|Coverfox|May16&email={email}&income=1000000&dob={dob_DD}-{dob_MM}-{dob_YYYY}&Gender=M&Issmoker=no&utm_source=Coverfox",
                "premium": {
                   "Y": {
                      "value": 12880,
                      "label": "12,880.0"
                   }
                },
                "insurer": {
                   "claims_settled": 97,
                   "name": "Aegon Life",
                   "policy_wording": {
                      "document": "uploads/life_product/policy_wording_documents/Aegon_Life_iTerm_E3A4REc.pdf"
                   },
                   "logo": "https://media.coverfox.com/uploads/life_product/insurer/aegon-life/logo_G1MdnlL.png",
                   "about_us": [
                      "Aegon Life Insurance Company Limited (formerly AEGON Religare Life Insurance Company Limited) launched its pan-India operations in July, 2008 following a multi-channel distribution strategy with a vision to help people plan their life better.",
                      ".Aegon, an international provider of lifeinsurance, pensions and asset management and Bennett, Coleman & Company, India's leading media conglomerate, have come together to launch Aegon Life Insurance.",
                      "The company is headquartered in Mumbai having 59 branches across 46 cities.The company has around 9600 life insurance agents serving over 4 lakh customers across India"
                   ],
                   "complaints_pending": 1.61,
                   "slug": "aegon-life"
                },
                "unmatched_params": {},
                "sum_assured": {
                   "value": 2.5E7,
                   "label": "2.5 crores"
                },
                "notifications": [],
                "grace_period": 30,
                "policy_issuance_tat": 12,
                "term": 25,
                "name": "iTerm",
                "is_integrated": true,
                "planquote_id": "",
                "medical_required_condition": "Upto 25 lakhs sum assured",
                "policy_wording": "https://media.coverfox.com/uploads/life_product/policy_wording_documents/Aegon_Life_iTerm_E3A4REc.pdf",
                "exclusions": [
                   "In case of death due to suicide within 12 months from the date of inception of the policy, the nominee of the policy holder shall be entitled to 80% of the premiums paid.",
                   "In case of death due to suicide within 12 months from the date of revival of the policy, the nominee of the policy holder shall be entitled to 80% of the premiums paid post revival."
                ]
             },
             {
                "features": {
                   "free": [
                      {
                         "slug": "life-stage-benefit",
                         "is_applied": false,
                         "description": "",
                         "name": "Life Stage Benefit"
                      }
                   ],
                   "paid": []
                },
                "rank": 1,
                "frequency": [
                   "Y",
                   "H",
                   "Q",
                   "M"
                ],
                "id": 40,
                "base_premium": {
                   "Y": {
                      "value": 13759,
                      "label": "13,759"
                   }
                },
                "is_medical_required": true,
                "buy_url": "https://onlineplans.maxlifeinsurance.com/content/neo/en/buy-online-landing/online-plans/online-term-plan/quote.html/TCOTP?Term=25&SumAssured=22000000&Gender=M&IsSmoker=N&EmailID={email}&Mobile={mobile}&ChannelID=135&CompanyID=9&SourceID=36&CategoryID=3&name={first_name}&Dob={dob_DD}/{dob_MM}/{dob_YYYY}",
                "premium": {
                   "Y": {
                      "value": 13759,
                      "label": "13,759.0"
                   }
                },
                "insurer": {
                   "claims_settled": 97.59,
                   "name": "Max Life",
                   "policy_wording": {
                      "document": null
                   },
                   "logo": "https://media.coverfox.com/uploads/life_product/insurer/max-life/logo_YDmswgg.jpg",
                   "about_us": [
                      "Max life Insurance is a joint venture between Max Financial Services Ltd. and Mitsui Sumitomo Insurance Co. Ltd. Max Life Insurance offers comprehensive life insurance and retirement solutions for long-term savings and protection. Max Life Insurance has a strong customer-centric approach focused on advice based sales and quality service."
                   ],
                   "complaints_pending": 0,
                   "slug": "max-life"
                },
                "unmatched_params": {
                   "sum_assured": "This is the maximum available cover in Max Life for you."
                },
                "sum_assured": {
                   "value": 2.2E7,
                   "label": "2.2 crores"
                },
                "notifications": [],
                "grace_period": 30,
                "policy_issuance_tat": 15,
                "term": 25,
                "name": "Online Term",
                "is_integrated": false,
                "planquote_id": "",
                "medical_required_condition": "Medical screening subject to underwriting norms.",
                "policy_wording": "https://media.coverfox.com/uploads/life_product/policy_wording_documents/Max_Life_Online_Term_Plan_Plus_Web_Brochure.pdf",
                "exclusions": [
                   "In case of death due to suicide within 12 months from the date of inception of the policy, the nominee of the policy holder shall be entitled to 80% of the premiums paid.",
                   "In case of death due to suicide within 12 months from the date of revival of the policy, the nominee of the policy holder shall be entitled to 80% of the premiums paid post revival."
                ]
             },
             {
                "features": {
                   "free": [
                      {
                         "slug": "terminal-illness",
                         "is_applied": false,
                         "description": "",
                         "name": "Terminal illness"
                      }
                   ],
                   "paid": [
                      {
                         "premium": 580,
                         "description": "In addition to the sum assured, an additional amount will be given in the case of death due to an accident.",
                         "validations": [
                            {
                               "message": "Please enter the expected cover amount.",
                               "name": "required"
                            },
                            {
                               "message": "The minimum eligible accidental death cover is 1% of Sum Assured.",
                               "name": "minValue",
                               "minValue": 1
                            },
                            {
                               "message": "The maximum eligible accidental death cover is 100% of Sum Assured.",
                               "name": "maxValue",
                               "maxValue": 100
                            }
                         ],
                         "messages": [],
                         "sum_assured": 4,
                         "is_applied": false,
                         "cover_value_type": "percentile",
                         "slug": "accidental-death",
                         "name": "Accidental death"
                      },
                      {
                         "premium": 235,
                         "description": "A benefit wherein the future premium payments by the insured are waived off under certain conditions",
                         "validations": [],
                         "messages": [],
                         "is_applied": false,
                         "slug": "waiver-of-premium",
                         "name": "Waiver of premium"
                      },
                      {
                         "slug": "idisability",
                         "is_applied": false,
                         "description": "A benefit wherein the future premium payments by the insured are waived off due to disability caused by accident.",
                         "name": "iDisability"
                      }
                   ]
                },
                "rank": 1,
                "frequency": [
                   "Y",
                   "H",
                   "Q",
                   "M"
                ],
                "id": 43,
                "base_premium": {
                   "Y": {
                      "value": 13791,
                      "label": "13,791"
                   }
                },
                "is_medical_required": true,
                "buy_url": "https://onlineinsurance.hdfclife.com/ocp?fname={first_name}&lname={last_name}&dob={dob_DD}/{dob_MM}/{dob_YYYY}&sumAssured=25000000&premium=13791&freq=AN&state=&city=&prodcd=C2P3DPER&email={email}&gender=M&mobno={mobile}&checkboxdisclaimer=1&tobstatus=0&option=Life&pptOption=&source=A_C2P3D+_Coverfox&agentcode=00617746&term=25&ppt=25&topupFlag=N&ADBPercentage=&topupPercentage=&lumpsum=&monthlyIncome=&incomeTerm=&increaseIncomePercentage=&jrnyFlow=Filter&ocpflag=N",
                "premium": {
                   "Y": {
                      "value": 13791,
                      "label": "13,791.0"
                   }
                },
                "insurer": {
                   "claims_settled": 97.62,
                   "name": "HDFC Life",
                   "policy_wording": {
                      "document": "uploads/life_product/policy_wording_documents/HDFC_Click2protect_Plus_brochure_.pdf"
                   },
                   "logo": "https://media.coverfox.com/uploads/life_product/insurer/hdfc-life/logo.png",
                   "about_us": [
                      [
                         "HDFC Life is one of the leading life insurance companies in India offering a range of individual and group insurance solutions that meet various customer needs such as Protection, Pension, Savings & Investment and Health, along with Children's & Women's Plan"
                      ],
                      [
                         "HDFC Life is a joint venture between Housing Development Finance Corporation Limited (HDFC), India's leading housing finance institution and Standard Life plc, the leading provider of financial services in the United Kingdom."
                      ]
                   ],
                   "complaints_pending": 0.62,
                   "slug": "hdfc-life"
                },
                "unmatched_params": {},
                "sum_assured": {
                   "value": 25000000,
                   "label": "2.5 crores"
                },
                "notifications": [],
                "grace_period": 30,
                "policy_issuance_tat": 15,
                "term": 25,
                "name": "Click To Protect 3D Plus",
                "is_integrated": true,
                "planquote_id": "",
                "medical_required_condition": "NA",
                "policy_wording": "https://media.coverfox.com/uploads/life_product/policy_wording_documents/C2P_3D_Brochure.pdf",
                "exclusions": [
                   ""
                ]
             },
             {
                "features": {
                   "free": [
                      {
                         "slug": "waiver-of-premium",
                         "is_applied": false,
                         "description": "A benefit wherein the future premium payments by the insured are waived off under certain conditions",
                         "name": "Waiver of premium"
                      },
                      {
                         "slug": "terminal-illness",
                         "is_applied": false,
                         "description": "",
                         "name": "Terminal illness"
                      }
                   ],
                   "paid": []
                },
                "rank": 1,
                "frequency": [
                   "Y",
                   "H",
                   "Q",
                   "M"
                ],
                "id": 1,
                "base_premium": {
                   "Y": {
                      "value": 15761,
                      "label": "15,761"
                   }
                },
                "is_medical_required": true,
                "buy_url": "https://buy.iciciprulife.com/buy/EBI.htm?UID=1527#/PreEBI/T46",
                "premium": {
                   "Y": {
                      "value": 15761,
                      "label": "15,761.0"
                   }
                },
                "insurer": {
                   "claims_settled": 96.87,
                   "name": "ICICI Prudential",
                   "policy_wording": {
                      "document": "uploads/life_product/policy_wording_documents/iProtect_Smart_p7C93UC.pdf"
                   },
                   "logo": "https://media.coverfox.com/uploads/life_product/insurer/icici-prudential/logo.png",
                   "about_us": [
                      "ICICI Prudential Life Insurance Company is a joint venture between ICICI Bank, a premier financial powerhouse,and Prudential plc, a leading international financial services group.",
                      "ICICI Prudential began its operations in December 2000 after receiving approval from Insurance Regulatory Development Authority of India (IRDAI). ICICI Prudential Life Insurance has maintained its focus on offering a wide range of flexible products that meet the needs of the Indian customer at every step in life."
                   ],
                   "complaints_pending": 0.13,
                   "slug": "icici-prudential"
                },
                "unmatched_params": {},
                "sum_assured": {
                   "value": 2.5E7,
                   "label": "2.5 crores"
                },
                "notifications": [],
                "grace_period": 30,
                "policy_issuance_tat": 7,
                "term": 25,
                "name": "iProtectSmart Life",
                "is_integrated": false,
                "planquote_id": "",
                "medical_required_condition": "Upto 50 lakhs sum assured",
                "policy_wording": "https://media.coverfox.com/uploads/life_product/policy_wording_documents/iProtect_Smart_p7C93UC.pdf",
                "exclusions": [
                   "In case of death due to suicide within 12 months from the date of inception of the policy, the nominee of the policy holder shall be entitled to 80% of the premiums paid.",
                   "In case of death due to suicide within 12 months from the date of revival of the policy, the nominee of the policy holder shall be entitled to 80% of the premiums paid post revival."
                ]
             },
             {
                "features": {
                   "free": [],
                   "paid": []
                },
                "rank": 3,
                "frequency": [
                   "Y",
                   "M"
                ],
                "id": 32,
                "base_premium": {
                   "Y": {
                      "value": 14455,
                      "label": "14,455"
                   }
                },
                "is_medical_required": true,
                "buy_url": "http://buyonline.life.futuregenerali.in/flexi-online-term-insurance/Default.aspx?sourcekey=CFO&UTM_Source=CFO&MobileNO={mobile}&EmailID={email}&Smoker=0&Gender=1&Nationality=1&AnnualIncome=1000000&EBI_Merger/T46_EBI/T46.html?V=1453294789385&plan=term&UID=1527&DateofBirth={dob_D}-{dob_M}-{dob_YYYY}",
                "premium": {
                   "Y": {
                      "value": 14455,
                      "label": "14,455.0"
                   }
                },
                "insurer": {
                   "claims_settled": 90.61,
                   "name": "Future Generali",
                   "policy_wording": {
                      "document": "uploads/life_product/policy_wording_documents/Future_Generali_Brochure.pdf"
                   },
                   "logo": "https://media.coverfox.com/uploads/life_product/insurer/future-generali/logo.png",
                   "about_us": [
                      "Future Generali is a joint venture between India's leading retailer Future Group, Italy based insurance major Generali and Industrial Investment Trust Ltd. (IITL).",
                      "The Company was incorporated in 2007 and brings together the unique qualities of the founding Companies - local experience and knowledge with global insurance expertise.",
                      "Future Generali offers an extensive range of life insurance products, and a network that ensures we are close to you wherever you go."
                   ],
                   "complaints_pending": 1,
                   "slug": "future-generali"
                },
                "unmatched_params": {},
                "sum_assured": {
                   "value": 2.5E7,
                   "label": "2.5 crores"
                },
                "notifications": [],
                "grace_period": 30,
                "policy_issuance_tat": 15,
                "term": 25,
                "name": "Flexi Online",
                "is_integrated": false,
                "planquote_id": "",
                "medical_required_condition": "Medical screening subject to underwriting norms.",
                "policy_wording": "https://media.coverfox.com/uploads/life_product/policy_wording_documents/Future_Generali_Brochure.pdf",
                "exclusions": [
                   " \"Accidental Benefit\" paid riders available with this plan ",
                   "In case of death due to suicide within 12 months from the date of inception of the policy, the nominee of the policy holder shall be entitled to 80% of the premiums paid.",
                   "In case of death due to suicide within 12 months from the date of revival of the policy, the nominee of the policy holder shall be entitled to 80% of the premiums paid post revival."
                ]
             }
          ],
          "M": [
             {
                "features": {
                   "free": [
                      {
                         "slug": "terminal-illness",
                         "is_applied": false,
                         "description": "",
                         "name": "Terminal illness"
                      },
                      {
                         "slug": "life-stage-benefit",
                         "is_applied": false,
                         "description": "",
                         "name": "Life Stage Benefit"
                      }
                   ],
                   "paid": [
                      {
                         "premium": 46,
                         "description": "In addition to the sum assured, an additional amount will be given in the case of death due to an accident.",
                         "validations": [
                            {
                               "message": "Please enter the expected cover amount.",
                               "name": "required"
                            },
                            {
                               "message": "The minimum eligible accidental death cover is Rs. 1,000,000.",
                               "name": "minValue",
                               "minValue": 1000000
                            },
                            {
                               "message": "The maximum eligible accidental death cover is Rs. 7,277,000.",
                               "name": "maxValue",
                               "maxValue": 7277000
                            }
                         ],
                         "messages": [],
                         "sum_assured": 1000000,
                         "is_applied": false,
                         "slug": "accidental-death",
                         "name": "Accidental death"
                      },
                      {
                         "premium": 8,
                         "description": "A benefit wherein the future premium payments by the insured are waived off under certain conditions",
                         "validations": [],
                         "messages": [],
                         "is_applied": false,
                         "slug": "waiver-of-premium",
                         "name": "Waiver of premium"
                      },
                      {
                         "slug": "idisability",
                         "is_applied": false,
                         "description": "A benefit wherein the future premium payments by the insured are waived off due to disability caused by accident.",
                         "name": "iDisability"
                      }
                   ]
                },
                "rank": 1,
                "frequency": [
                   "Y",
                   "H",
                   "M"
                ],
                "id": 41,
                "base_premium": {
                   "M": {
                      "value": 1121,
                      "label": "1,121"
                   }
                },
                "is_medical_required": true,
                "buy_url": "https://www.aegonlife.com/LeadApi/API/string?productid=1&Source=Coverfox&name={name}&mobile={mobile}&flowtype=DIRECT&sourcekey=iT|Referral|Coverfox|May16&email={email}&income=1000000&dob={dob_DD}-{dob_MM}-{dob_YYYY}&Gender=M&Issmoker=no&utm_source=Coverfox",
                "premium": {
                   "M": {
                      "value": 1121,
                      "label": "1,121.0"
                   }
                },
                "insurer": {
                   "claims_settled": 97,
                   "name": "Aegon Life",
                   "policy_wording": {
                      "document": "uploads/life_product/policy_wording_documents/Aegon_Life_iTerm_E3A4REc.pdf"
                   },
                   "logo": "https://media.coverfox.com/uploads/life_product/insurer/aegon-life/logo_G1MdnlL.png",
                   "about_us": [
                      "Aegon Life Insurance Company Limited (formerly AEGON Religare Life Insurance Company Limited) launched its pan-India operations in July, 2008 following a multi-channel distribution strategy with a vision to help people plan their life better.",
                      ".Aegon, an international provider of lifeinsurance, pensions and asset management and Bennett, Coleman & Company, India's leading media conglomerate, have come together to launch Aegon Life Insurance.",
                      "The company is headquartered in Mumbai having 59 branches across 46 cities.The company has around 9600 life insurance agents serving over 4 lakh customers across India"
                   ],
                   "complaints_pending": 1.61,
                   "slug": "aegon-life"
                },
                "unmatched_params": {},
                "sum_assured": {
                   "value": 2.5E7,
                   "label": "2.5 crores"
                },
                "notifications": [],
                "grace_period": 15,
                "policy_issuance_tat": 12,
                "term": 25,
                "name": "iTerm",
                "is_integrated": true,
                "planquote_id": "",
                "medical_required_condition": "Upto 25 lakhs sum assured",
                "policy_wording": "https://media.coverfox.com/uploads/life_product/policy_wording_documents/Aegon_Life_iTerm_E3A4REc.pdf",
                "exclusions": [
                   "In case of death due to suicide within 12 months from the date of inception of the policy, the nominee of the policy holder shall be entitled to 80% of the premiums paid.",
                   "In case of death due to suicide within 12 months from the date of revival of the policy, the nominee of the policy holder shall be entitled to 80% of the premiums paid post revival."
                ]
             },
             {
                "features": {
                   "free": [],
                   "paid": []
                },
                "rank": 1,
                "frequency": [
                   "M"
                ],
                "id": 36,
                "base_premium": {
                   "M": {
                      "value": 1147,
                      "label": "1,147"
                   }
                },
                "is_medical_required": true,
                "buy_url": "/term-insurance/insurer-redirect/026b6a8a-7879-4c69-950e-242ff85231ce/plan/36/?mobile=%7Bmobile%7D&dob=%7Bdob%7D&email=%7Bemail%7D&planquote_id=%7BplanQuoteId%7D&name=%7Bname%7D",
                "premium": {
                   "M": {
                      "value": 1147,
                      "label": "1,147.0"
                   }
                },
                "insurer": {
                   "claims_settled": 93.29,
                   "name": "Edelweiss Tokio",
                   "policy_wording": {
                      "document": "uploads/life_product/policy_wording_documents/Edelweiss_Tokio_Life_Brochure.pdf"
                   },
                   "logo": "https://media.coverfox.com/uploads/life_product/insurer/edelweiss-tokio/logo.png",
                   "about_us": [
                      "Edelweiss Tokio Life Insurance is a new generation Insurance Company, set up with a start up capital of INR 550 Crores, thereby showing our commitment to building a long term sustainable business focused on a consumer centric approach.",
                      "The company is a joint venture between Edelweiss Financial Services, one of India's leading diversified financial services companies with business straddling across Credit, Capital Markets, Asset Management, Housing finance and Insurance and Tokio Marine Holdings Inc, one of the oldest and the biggest Insurance companies in Japan now with presence across 39 countries around the world."
                   ],
                   "complaints_pending": 0.91,
                   "slug": "edelweiss-tokio"
                },
                "unmatched_params": {
                   "sum_assured": "This is the maximum available cover in Edelweiss Tokio for you."
                },
                "sum_assured": {
                   "value": 2.2E7,
                   "label": "2.2 crores"
                },
                "notifications": [],
                "grace_period": 30,
                "policy_issuance_tat": 15,
                "term": 25,
                "name": "My Life+",
                "is_integrated": false,
                "planquote_id": "",
                "medical_required_condition": "Medical screening subject to underwriting norms.",
                "policy_wording": "https://media.coverfox.com/uploads/life_product/policy_wording_documents/Edelweiss_Tokio_Life_Brochure.pdf",
                "exclusions": [
                   "In case of death due to suicide within 12 months from the date of inception of the policy, the nominee of the policy holder shall be entitled to 80% of the premiums paid.",
                   "In case of death due to suicide within 12 months from the date of revival of the policy, the nominee of the policy holder shall be entitled to 80% of the premiums paid post revival."
                ]
             },
             {
                "features": {
                   "free": [
                      {
                         "slug": "terminal-illness",
                         "is_applied": false,
                         "description": "",
                         "name": "Terminal illness"
                      }
                   ],
                   "paid": [
                      {
                         "premium": 50,
                         "description": "In addition to the sum assured, an additional amount will be given in the case of death due to an accident.",
                         "validations": [
                            {
                               "message": "Please enter the expected cover amount.",
                               "name": "required"
                            },
                            {
                               "message": "The minimum eligible accidental death cover is 1% of Sum Assured.",
                               "name": "minValue",
                               "minValue": 1
                            },
                            {
                               "message": "The maximum eligible accidental death cover is 100% of Sum Assured.",
                               "name": "maxValue",
                               "maxValue": 100
                            }
                         ],
                         "messages": [],
                         "sum_assured": 4,
                         "is_applied": false,
                         "cover_value_type": "percentile",
                         "slug": "accidental-death",
                         "name": "Accidental death"
                      },
                      {
                         "premium": 20,
                         "description": "A benefit wherein the future premium payments by the insured are waived off under certain conditions",
                         "validations": [],
                         "messages": [],
                         "is_applied": false,
                         "slug": "waiver-of-premium",
                         "name": "Waiver of premium"
                      },
                      {
                         "slug": "idisability",
                         "is_applied": false,
                         "description": "A benefit wherein the future premium payments by the insured are waived off due to disability caused by accident.",
                         "name": "iDisability"
                      }
                   ]
                },
                "rank": 1,
                "frequency": [
                   "Y",
                   "H",
                   "Q",
                   "M"
                ],
                "id": 43,
                "base_premium": {
                   "M": {
                      "value": 1186,
                      "label": "1,186"
                   }
                },
                "is_medical_required": true,
                "buy_url": "https://onlineinsurance.hdfclife.com/ocp?fname={first_name}&lname={last_name}&dob={dob_DD}/{dob_MM}/{dob_YYYY}&sumAssured=25000000&premium=1186&freq=AN&state=&city=&prodcd=C2P3DPER&email={email}&gender=M&mobno={mobile}&checkboxdisclaimer=1&tobstatus=0&option=Life&pptOption=&source=A_C2P3D+_Coverfox&agentcode=00617746&term=25&ppt=25&topupFlag=N&ADBPercentage=&topupPercentage=&lumpsum=&monthlyIncome=&incomeTerm=&increaseIncomePercentage=&jrnyFlow=Filter&ocpflag=N",
                "premium": {
                   "M": {
                      "value": 1186,
                      "label": "1,186.0"
                   }
                },
                "insurer": {
                   "claims_settled": 97.62,
                   "name": "HDFC Life",
                   "policy_wording": {
                      "document": "uploads/life_product/policy_wording_documents/HDFC_Click2protect_Plus_brochure_.pdf"
                   },
                   "logo": "https://media.coverfox.com/uploads/life_product/insurer/hdfc-life/logo.png",
                   "about_us": [
                      [
                         "HDFC Life is one of the leading life insurance companies in India offering a range of individual and group insurance solutions that meet various customer needs such as Protection, Pension, Savings & Investment and Health, along with Children's & Women's Plan"
                      ],
                      [
                         "HDFC Life is a joint venture between Housing Development Finance Corporation Limited (HDFC), India's leading housing finance institution and Standard Life plc, the leading provider of financial services in the United Kingdom."
                      ]
                   ],
                   "complaints_pending": 0.62,
                   "slug": "hdfc-life"
                },
                "unmatched_params": {},
                "sum_assured": {
                   "value": 25000000,
                   "label": "2.5 crores"
                },
                "notifications": [],
                "grace_period": 15,
                "policy_issuance_tat": 15,
                "term": 25,
                "name": "Click To Protect 3D Plus",
                "is_integrated": true,
                "planquote_id": "",
                "medical_required_condition": "NA",
                "policy_wording": "https://media.coverfox.com/uploads/life_product/policy_wording_documents/C2P_3D_Brochure.pdf",
                "exclusions": [
                   ""
                ]
             },
             {
                "features": {
                   "free": [
                      {
                         "slug": "life-stage-benefit",
                         "is_applied": false,
                         "description": "",
                         "name": "Life Stage Benefit"
                      }
                   ],
                   "paid": []
                },
                "rank": 1,
                "frequency": [
                   "Y",
                   "H",
                   "Q",
                   "M"
                ],
                "id": 40,
                "base_premium": {
                   "M": {
                      "value": 1211,
                      "label": "1,211"
                   }
                },
                "is_medical_required": true,
                "buy_url": "https://onlineplans.maxlifeinsurance.com/content/neo/en/buy-online-landing/online-plans/online-term-plan/quote.html/TCOTP?Term=25&SumAssured=22000000&Gender=M&IsSmoker=N&EmailID={email}&Mobile={mobile}&ChannelID=135&CompanyID=9&SourceID=36&CategoryID=3&name={first_name}&Dob={dob_DD}/{dob_MM}/{dob_YYYY}",
                "premium": {
                   "M": {
                      "value": 1211,
                      "label": "1,211.0"
                   }
                },
                "insurer": {
                   "claims_settled": 97.59,
                   "name": "Max Life",
                   "policy_wording": {
                      "document": null
                   },
                   "logo": "https://media.coverfox.com/uploads/life_product/insurer/max-life/logo_YDmswgg.jpg",
                   "about_us": [
                      "Max life Insurance is a joint venture between Max Financial Services Ltd. and Mitsui Sumitomo Insurance Co. Ltd. Max Life Insurance offers comprehensive life insurance and retirement solutions for long-term savings and protection. Max Life Insurance has a strong customer-centric approach focused on advice based sales and quality service."
                   ],
                   "complaints_pending": 0,
                   "slug": "max-life"
                },
                "unmatched_params": {
                   "sum_assured": "This is the maximum available cover in Max Life for you."
                },
                "sum_assured": {
                   "value": 2.2E7,
                   "label": "2.2 crores"
                },
                "notifications": [],
                "grace_period": 15,
                "policy_issuance_tat": 15,
                "term": 25,
                "name": "Online Term",
                "is_integrated": false,
                "planquote_id": "",
                "medical_required_condition": "Medical screening subject to underwriting norms.",
                "policy_wording": "https://media.coverfox.com/uploads/life_product/policy_wording_documents/Max_Life_Online_Term_Plan_Plus_Web_Brochure.pdf",
                "exclusions": [
                   "In case of death due to suicide within 12 months from the date of inception of the policy, the nominee of the policy holder shall be entitled to 80% of the premiums paid.",
                   "In case of death due to suicide within 12 months from the date of revival of the policy, the nominee of the policy holder shall be entitled to 80% of the premiums paid post revival."
                ]
             },
             {
                "features": {
                   "free": [
                      {
                         "slug": "waiver-of-premium",
                         "is_applied": false,
                         "description": "A benefit wherein the future premium payments by the insured are waived off under certain conditions",
                         "name": "Waiver of premium"
                      },
                      {
                         "slug": "terminal-illness",
                         "is_applied": false,
                         "description": "",
                         "name": "Terminal illness"
                      }
                   ],
                   "paid": []
                },
                "rank": 1,
                "frequency": [
                   "Y",
                   "H",
                   "Q",
                   "M"
                ],
                "id": 1,
                "base_premium": {
                   "M": {
                      "value": 1313,
                      "label": "1,313"
                   }
                },
                "is_medical_required": true,
                "buy_url": "https://buy.iciciprulife.com/buy/EBI.htm?UID=1527#/PreEBI/T46",
                "premium": {
                   "M": {
                      "value": 1313,
                      "label": "1,313.0"
                   }
                },
                "insurer": {
                   "claims_settled": 96.87,
                   "name": "ICICI Prudential",
                   "policy_wording": {
                      "document": "uploads/life_product/policy_wording_documents/iProtect_Smart_p7C93UC.pdf"
                   },
                   "logo": "https://media.coverfox.com/uploads/life_product/insurer/icici-prudential/logo.png",
                   "about_us": [
                      "ICICI Prudential Life Insurance Company is a joint venture between ICICI Bank, a premier financial powerhouse,and Prudential plc, a leading international financial services group.",
                      "ICICI Prudential began its operations in December 2000 after receiving approval from Insurance Regulatory Development Authority of India (IRDAI). ICICI Prudential Life Insurance has maintained its focus on offering a wide range of flexible products that meet the needs of the Indian customer at every step in life."
                   ],
                   "complaints_pending": 0.13,
                   "slug": "icici-prudential"
                },
                "unmatched_params": {},
                "sum_assured": {
                   "value": 2.5E7,
                   "label": "2.5 crores"
                },
                "notifications": [],
                "grace_period": 15,
                "policy_issuance_tat": 7,
                "term": 25,
                "name": "iProtectSmart Life",
                "is_integrated": false,
                "planquote_id": "",
                "medical_required_condition": "Upto 50 lakhs sum assured",
                "policy_wording": "https://media.coverfox.com/uploads/life_product/policy_wording_documents/iProtect_Smart_p7C93UC.pdf",
                "exclusions": [
                   "In case of death due to suicide within 12 months from the date of inception of the policy, the nominee of the policy holder shall be entitled to 80% of the premiums paid.",
                   "In case of death due to suicide within 12 months from the date of revival of the policy, the nominee of the policy holder shall be entitled to 80% of the premiums paid post revival."
                ]
             },
             {
                "features": {
                   "free": [],
                   "paid": []
                },
                "rank": 3,
                "frequency": [
                   "Y",
                   "M"
                ],
                "id": 32,
                "base_premium": {
                   "M": {
                      "value": 1276,
                      "label": "1,276"
                   }
                },
                "is_medical_required": true,
                "buy_url": "http://buyonline.life.futuregenerali.in/flexi-online-term-insurance/Default.aspx?sourcekey=CFO&UTM_Source=CFO&MobileNO={mobile}&EmailID={email}&Smoker=0&Gender=1&Nationality=1&AnnualIncome=1000000&EBI_Merger/T46_EBI/T46.html?V=1453294789385&plan=term&UID=1527&DateofBirth={dob_D}-{dob_M}-{dob_YYYY}",
                "premium": {
                   "M": {
                      "value": 1276,
                      "label": "1,276.0"
                   }
                },
                "insurer": {
                   "claims_settled": 90.61,
                   "name": "Future Generali",
                   "policy_wording": {
                      "document": "uploads/life_product/policy_wording_documents/Future_Generali_Brochure.pdf"
                   },
                   "logo": "https://media.coverfox.com/uploads/life_product/insurer/future-generali/logo.png",
                   "about_us": [
                      "Future Generali is a joint venture between India's leading retailer Future Group, Italy based insurance major Generali and Industrial Investment Trust Ltd. (IITL).",
                      "The Company was incorporated in 2007 and brings together the unique qualities of the founding Companies - local experience and knowledge with global insurance expertise.",
                      "Future Generali offers an extensive range of life insurance products, and a network that ensures we are close to you wherever you go."
                   ],
                   "complaints_pending": 1,
                   "slug": "future-generali"
                },
                "unmatched_params": {},
                "sum_assured": {
                   "value": 2.5E7,
                   "label": "2.5 crores"
                },
                "notifications": [],
                "grace_period": 15,
                "policy_issuance_tat": 15,
                "term": 25,
                "name": "Flexi Online",
                "is_integrated": false,
                "planquote_id": "",
                "medical_required_condition": "Medical screening subject to underwriting norms.",
                "policy_wording": "https://media.coverfox.com/uploads/life_product/policy_wording_documents/Future_Generali_Brochure.pdf",
                "exclusions": [
                   " \"Accidental Benefit\" paid riders available with this plan ",
                   "In case of death due to suicide within 12 months from the date of inception of the policy, the nominee of the policy holder shall be entitled to 80% of the premiums paid.",
                   "In case of death due to suicide within 12 months from the date of revival of the policy, the nominee of the policy holder shall be entitled to 80% of the premiums paid post revival."
                ]
             }
          ]
       },
       "user_data": {
          "salary": 1000000,
          "tobacco_user": false,
          "mobile": "9999988888",
          "gender": "M",
          "age": 25,
          "sum_assured": 25000000,
          "maturity_age": 50,
          "email": ""
       }
    },
    "redirect_url": ""
 }

 //console.log('arpan',data);