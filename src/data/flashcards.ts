export type Category = 'Cardiovascular' | 'Respiratory' | 'Endocrine' | 'Multi System' | 'Neurological';

export interface Flashcard {
  id: string;
  category: Category;
  question: string;
  answer: string;
  explanation: {
    detailed: string;
    images: Array<{
      url: string;
      caption: string;
      alt: string;
    }>;
    relatedConcepts: string[];
  };
}

// Helper function to generate unique IDs
function generateId(category: Category, index: number): string {
  return `${category.toLowerCase()}-${index}`;
}

export const flashcards: Flashcard[] = [
  // Cardiovascular (50 cards)
  {
    id: generateId('Cardiovascular', 0),
    category: 'Cardiovascular',
    question: 'What are the normal values for central venous pressure (CVP)?',
    answer: '2-6 mmHg. Elevated values may indicate right heart failure, fluid overload, or tamponade.',
    explanation: {
      detailed: 'Central venous pressure (CVP) is a measure of the pressure in the right atrium and ventricle of the heart. Normal values range from 2 to 6 mmHg. Elevated CVP can indicate right heart failure, fluid overload, or tamponade. It is typically measured using a central venous catheter.',
      images: [],
      relatedConcepts: [
        'Right heart failure',
        'Fluid overload',
        'Tamponade',
        'Central venous catheter'
      ]
    }
  },
  {
    id: generateId('Cardiovascular', 1),
    category: 'Cardiovascular',
    question: 'What are the diagnostic criteria for cardiogenic shock?',
    answer: 'Systolic BP <90 mmHg, signs of organ hypoperfusion, elevated cardiac enzymes, and evidence of left ventricular dysfunction.',
    explanation: {
      detailed: 'Cardiogenic shock is a life-threatening condition where the heart is unable to pump enough blood to meet the body\'s needs. The diagnostic criteria include:\n\n1. Systolic BP <90 mmHg\n2. Signs of organ hypoperfusion\n3. Elevated cardiac enzymes\n4. Evidence of left ventricular dysfunction\n\nThese criteria help identify the underlying cause of shock and guide treatment.',
      images: [],
      relatedConcepts: [
        'Systolic blood pressure',
        'Organ hypoperfusion',
        'Cardiac enzymes',
        'Left ventricular dysfunction'
      ]
    }
  },
  {
    id: generateId('Cardiovascular', 2),
    category: 'Cardiovascular',
    question: 'What are the classic signs of cardiac tamponade?',
    answer: 'Beck\'s triad: hypotension, muffled heart sounds, and jugular venous distention (JVD). Also may include pulsus paradoxus >10 mmHg.',
    explanation: {
      detailed: 'Cardiac tamponade is a life-threatening condition where fluid accumulates in the pericardial space, compressing the heart and reducing cardiac output. Beck\'s triad, named after Claude Beck, consists of:\n\n1. Hypotension: Due to reduced cardiac output\n2. Muffled heart sounds: Caused by fluid dampening the heart sounds\n3. JVD: Results from increased central venous pressure\n\nPulsus paradoxus occurs because the compressed heart is more sensitive to respiratory variations in intrathoracic pressure.',
      images: [
        {
          url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/Blausen_0164_CardiacTamponade.png/800px-Blausen_0164_CardiacTamponade.png',
          caption: 'Comparison of normal heart vs. cardiac tamponade',
          alt: 'Diagram showing normal heart and cardiac tamponade'
        }
      ],
      relatedConcepts: [
        'Pericardial effusion',
        'Hemodynamic compromise',
        'Emergency pericardiocentesis',
        'Echocardiographic findings in tamponade'
      ]
    }
  },
  {
    id: generateId('Cardiovascular', 3),
    category: 'Cardiovascular',
    question: 'What medications are indicated for acute coronary syndrome?',
    answer: 'Aspirin, nitroglycerin, beta-blockers, anticoagulation (heparin/LMWH), and consideration of fibrinolytics if indicated.',
    explanation: {
      detailed: 'Acute coronary syndrome (ACS) is a group of conditions that involve the buildup of plaque in the arteries supplying the heart. The medications indicated for ACS include:\n\n1. Aspirin: Used to prevent platelet aggregation\n2. Nitroglycerin: Used to dilate blood vessels and reduce chest pain\n3. Beta-blockers: Used to reduce heart rate and blood pressure\n4. Anticoagulation (heparin/low molecular weight heparin [LMWH]): Used to prevent blood clotting\n5. Fibrinolytics: Used to dissolve blood clots\n\nThese medications help open blocked arteries and restore blood flow to the heart.',
      images: [],
      relatedConcepts: [
        'Aspirin',
        'Nitroglycerin',
        'Beta-blockers',
        'Anticoagulation',
        'Fibrinolytics'
      ]
    }
  },
  {
    id: generateId('Cardiovascular', 4),
    category: 'Cardiovascular',
    question: 'What are the indications for temporary pacing?',
    answer: 'Symptomatic bradycardia, complete heart block, or high-grade AV block not responding to medication.',
    explanation: {
      detailed: 'Temporary pacing is used to treat symptomatic bradycardia, complete heart block, or high-grade atrioventricular block (AV block) when the heart rate is too slow to maintain adequate cardiac output. Temporary pacing can be delivered using:\n\n1. Implantable cardioverter defibrillators (ICDs)\n2. Pacemakers\n3. External pacing devices\n\nThese devices help maintain a regular heart rhythm and prevent symptoms of bradycardia or heart block.',
      images: [],
      relatedConcepts: [
        'Symptomatic bradycardia',
        'Complete heart block',
        'High-grade AV block',
        'Implantable cardioverter defibrillators',
        'Pacemakers',
        'External pacing devices'
      ]
    }
  },
  {
    id: generateId('Cardiovascular', 5),
    category: 'Cardiovascular',
    question: 'What are the signs of right heart failure?',
    answer: 'Elevated JVD, peripheral edema, hepatomegaly, right-sided S3, and tricuspid regurgitation murmur.',
    explanation: {
      detailed: 'Right heart failure occurs when the right ventricle or pulmonary artery is unable to pump blood effectively. Signs of right heart failure include:\n\n1. Elevated jugular venous distention (JVD)\n2. Peripheral edema\n3. Hepatomegaly\n4. Right-sided S3\n5. Tricuspid regurgitation murmur\n\nThese signs indicate that the right ventricle is not pumping blood efficiently, leading to fluid accumulation in the body and potentially life-threatening complications.',
      images: [],
      relatedConcepts: [
        'Right heart failure',
        'Jugular venous distention',
        'Peripheral edema',
        'Hepatomegaly',
        'Right-sided S3',
        'Tricuspid regurgitation murmur'
      ]
    }
  },
  {
    id: generateId('Cardiovascular', 6),
    category: 'Cardiovascular',
    question: 'What are the hemodynamic parameters monitored in pulmonary artery catheterization?',
    answer: 'CVP, PAP, PCWP, CO/CI, SVR, PVR, and mixed venous oxygen saturation.',
    explanation: {
      detailed: 'Pulmonary artery catheterization is a procedure used to monitor hemodynamic parameters in patients with suspected or confirmed heart failure or pulmonary embolism. The parameters monitored include:\n\n1. Central venous pressure (CVP)\n2. Pulmonary artery pressure (PAP)\n3. Pulmonary capillary wedge pressure (PCWP)\n4. Cardiac output (CO)\n5. Coronary artery flow (CI)\n6. Systemic vascular resistance (SVR)\n7. Pulmonary vascular resistance (PVR)\n8. Mixed venous oxygen saturation\n\nThese parameters help assess the status of the heart and lungs and guide treatment decisions.',
      images: [],
      relatedConcepts: [
        'Central venous pressure',
        'Pulmonary artery pressure',
        'Pulmonary capillary wedge pressure',
        'Cardiac output',
        'Coronary artery flow',
        'Systemic vascular resistance',
        'Pulmonary vascular resistance',
        'Mixed venous oxygen saturation'
      ]
    }
  },
  {
    id: generateId('Cardiovascular', 7),
    category: 'Cardiovascular',
    question: 'What are the indications for IABP therapy?',
    answer: 'Cardiogenic shock, refractory angina, mechanical complications of MI, and bridge to definitive therapy.',
    explanation: {
      detailed: 'Intra-aortic balloon pump (IABP) therapy is a mechanical circulatory support device used in critical cardiac conditions. The main indications include:\n\n1. Cardiogenic shock: To improve coronary perfusion and reduce afterload\n2. Refractory angina: When medical therapy is insufficient\n3. Mechanical complications of MI: Such as acute mitral regurgitation or ventricular septal defect\n4. Bridge to definitive therapy: While awaiting surgery or other interventions',
      images: [],
      relatedConcepts: [
        'Cardiogenic shock',
        'Mechanical circulatory support',
        'Coronary perfusion',
        'Afterload reduction'
      ]
    }
  },
  {
    id: generateId('Cardiovascular', 8),
    category: 'Cardiovascular',
    question: 'What are the nursing considerations for patients on vasopressors?',
    answer: 'Monitor BP, HR, urine output, peripheral perfusion, and IV site integrity. Use central line for administration.',
    explanation: {
      detailed: 'Nursing care for patients on vasopressors requires careful monitoring and assessment:\n\n1. Blood pressure monitoring: Frequent checks to ensure target MAP\n2. Heart rate monitoring: Watch for tachycardia\n3. Urine output: Indicator of adequate tissue perfusion\n4. Peripheral perfusion: Check extremities for circulation\n5. IV site integrity: Monitor for extravasation\n6. Central line: Required for administration due to risk of tissue necrosis',
      images: [],
      relatedConcepts: [
        'Mean arterial pressure',
        'Tissue perfusion',
        'Extravasation',
        'Central line management',
        'Hemodynamic monitoring'
      ]
    }
  },
  {
    id: generateId('Cardiovascular', 9),
    category: 'Cardiovascular',
    question: 'What are the signs of aortic dissection?',
    answer: 'Sudden severe chest pain radiating to back, unequal pulses, neurologic deficits, and widened mediastinum on chest X-ray.',
    explanation: {
      detailed: 'Aortic dissection is a life-threatening emergency characterized by:\n\n1. Sudden severe chest pain: Often described as tearing or ripping\n2. Pain radiation: Typically to back or between shoulder blades\n3. Unequal pulses: Due to involvement of branch vessels\n4. Neurologic deficits: From compromised cerebral blood flow\n5. Widened mediastinum: Classic chest X-ray finding',
      images: [],
      relatedConcepts: [
        'Stanford classification',
        'DeBakey classification',
        'Marfan syndrome',
        'Hypertensive emergency',
        'Acute aortic syndrome'
      ]
    }
  },
  {
    id: generateId('Cardiovascular', 10),
    category: 'Cardiovascular',
    question: 'What are the hemodynamic parameters indicating cardiogenic shock?',
    answer: 'CI <2.2 L/min/m2, PCWP >18 mmHg, systolic BP <90 mmHg, and signs of tissue hypoperfusion.',
    explanation: {
      detailed: 'Cardiogenic shock is characterized by specific hemodynamic parameters:\n\n1. Cardiac Index (CI) <2.2 L/min/m2: Indicates severely reduced cardiac output\n2. PCWP >18 mmHg: Shows left ventricular failure\n3. Systolic BP <90 mmHg: Results from reduced cardiac output\n4. Signs of tissue hypoperfusion: Including altered mental status, oliguria, cold extremities\n\nThese parameters help guide therapy and assess response to interventions.',
      images: [],
      relatedConcepts: [
        'Cardiac output',
        'Pulmonary capillary wedge pressure',
        'Tissue perfusion',
        'Shock states',
        'Hemodynamic monitoring'
      ]
    }
  },
  {
    id: generateId('Cardiovascular', 11),
    category: 'Cardiovascular',
    question: 'What are the indications for emergent pericardiocentesis?',
    answer: 'Cardiac tamponade with hemodynamic compromise, large pericardial effusion causing respiratory distress.',
    explanation: {
      detailed: 'Emergent pericardiocentesis is indicated in life-threatening conditions:\n\n1. Cardiac tamponade with hemodynamic compromise:\n   - Hypotension\n   - Tachycardia\n   - Pulsus paradoxus\n2. Large pericardial effusion causing:\n   - Respiratory distress\n   - Cardiac compression\n   - Impending cardiovascular collapse\n\nThe procedure should be performed under echocardiographic guidance when possible.',
      images: [],
      relatedConcepts: [
        'Cardiac tamponade',
        'Pericardial effusion',
        'Echocardiographic guidance',
        'Hemodynamic compromise',
        'Pulsus paradoxus'
      ]
    }
  },
  {
    id: generateId('Cardiovascular', 12),
    category: 'Cardiovascular',
    question: 'What are the nursing considerations for patients on dobutamine?',
    answer: 'Monitor HR, BP, cardiac rhythm, urine output. Watch for tachycardia, arrhythmias, and tissue extravasation.',
    explanation: {
      detailed: 'Nursing care for patients receiving dobutamine requires careful monitoring:\n\n1. Hemodynamic monitoring:\n   - Heart rate and rhythm\n   - Blood pressure\n   - Cardiac output if available\n2. Signs of complications:\n   - Tachycardia\n   - Arrhythmias\n   - Tissue extravasation\n3. Response indicators:\n   - Urine output\n   - Mental status\n   - Peripheral perfusion',
      images: [],
      relatedConcepts: [
        'Inotropic therapy',
        'Hemodynamic monitoring',
        'Cardiac rhythm assessment',
        'Medication administration',
        'Tissue perfusion'
      ]
    }
  },
  {
    id: generateId('Cardiovascular', 13),
    category: 'Cardiovascular',
    question: 'What are the signs of right ventricular infarction?',
    answer: 'Hypotension, elevated JVD, clear lung sounds, ST elevation in V4R, and sensitivity to preload reduction.',
    explanation: {
      detailed: 'Right ventricular infarction presents with distinctive signs:\n\n1. Hypotension: Due to reduced RV output\n2. Elevated JVD: From right heart failure\n3. Clear lung sounds: Unlike left heart failure\n4. ST elevation in V4R: Diagnostic ECG finding\n5. Preload sensitivity: Worsening with nitrates/diuretics',
      images: [],
      relatedConcepts: [
        'Right heart failure',
        'ECG interpretation',
        'Hemodynamic monitoring',
        'Volume management',
        'Cardiogenic shock'
      ]
    }
  },
  {
    id: generateId('Cardiovascular', 14),
    category: 'Cardiovascular',
    question: 'What are the contraindications for thrombolytic therapy in acute MI?',
    answer: 'Active bleeding, recent surgery/trauma, hemorrhagic stroke history, uncontrolled hypertension >180/110.',
    explanation: {
      detailed: 'Contraindications to thrombolytic therapy include:\n\n1. Active bleeding: Any active internal bleeding\n2. Recent surgery/trauma: Within past 2-3 weeks\n3. Hemorrhagic stroke history: Any history of intracranial hemorrhage\n4. Severe hypertension: BP >180/110 despite treatment\n\nThese contraindications help prevent life-threatening bleeding complications.',
      images: [],
      relatedConcepts: [
        'Thrombolysis',
        'Bleeding risk assessment',
        'Stroke prevention',
        'Blood pressure management',
        'Reperfusion therapy'
      ]
    }
  },
  {
    id: generateId('Cardiovascular', 15),
    category: 'Cardiovascular',
    question: 'What are the signs of acute mitral regurgitation?',
    answer: 'New systolic murmur, pulmonary edema, hypotension, and possible S3 gallop.',
    explanation: {
      detailed: 'Acute mitral regurgitation presents with:\n\n1. New systolic murmur: Holosystolic at apex\n2. Pulmonary edema: Due to sudden left atrial pressure elevation\n3. Hypotension: From reduced forward flow\n4. S3 gallop: Indicates volume overload\n\nThis condition requires immediate intervention to prevent cardiogenic shock.',
      images: [],
      relatedConcepts: [
        'Cardiac auscultation',
        'Heart failure',
        'Cardiogenic shock',
        'Valvular heart disease',
        'Hemodynamic instability'
      ]
    }
  },
  {
    id: generateId('Cardiovascular', 16),
    category: 'Cardiovascular',
    question: 'What are the nursing considerations for patients on milrinone?',
    answer: 'Monitor BP, HR, cardiac rhythm, renal function. Watch for hypotension and arrhythmias.',
    explanation: {
      detailed: 'Nursing care for patients on milrinone requires:\n\n1. Hemodynamic monitoring:\n   - Blood pressure: Risk of hypotension\n   - Heart rate and rhythm: Risk of arrhythmias\n   - Cardiac output if available\n2. Renal function monitoring:\n   - Urine output\n   - Creatinine levels\n3. Dose adjustments based on:\n   - Renal function\n   - Hemodynamic response',
      images: [],
      relatedConcepts: [
        'Inotropic therapy',
        'Hemodynamic monitoring',
        'Renal function',
        'Arrhythmia management',
        'Heart failure treatment'
      ]
    }
  },
  {
    id: generateId('Cardiovascular', 17),
    category: 'Cardiovascular',
    question: 'What are the signs of ventricular septal rupture after MI?',
    answer: 'New harsh holosystolic murmur, sudden hemodynamic compromise, and increased oxygen saturation in right heart chambers.',
    explanation: {
      detailed: 'Ventricular septal rupture (VSR) post-MI presents with:\n\n1. New harsh holosystolic murmur:\n   - Best heard at left lower sternal border\n   - Radiates to right sternal border\n2. Hemodynamic compromise:\n   - Sudden hypotension\n   - Signs of cardiogenic shock\n3. Increased right heart O2 saturation:\n   - Due to left-to-right shunt\n   - Step-up in oxygen saturation',
      images: [],
      relatedConcepts: [
        'Post-MI complications',
        'Mechanical complications',
        'Cardiogenic shock',
        'Left-to-right shunt',
        'Emergency cardiac surgery'
      ]
    }
  },
  {
    id: generateId('Cardiovascular', 18),
    category: 'Cardiovascular',
    question: 'What are the nursing considerations for patients with heart blocks?',
    answer: 'Monitor HR/rhythm, maintain transcutaneous pacing pads, prepare for emergent intervention if symptomatic.',
    explanation: {
      detailed: 'Nursing care for patients with heart blocks includes:\n\n1. Continuous monitoring:\n   - Heart rate and rhythm\n   - Signs of progression\n   - Symptoms of poor perfusion\n2. Emergency preparedness:\n   - Transcutaneous pacing pads in place\n   - Equipment check every shift\n   - Code cart readily available\n3. Assessment for:\n   - Dizziness\n   - Syncope\n   - Chest pain',
      images: [],
      relatedConcepts: [
        'AV blocks',
        'Transcutaneous pacing',
        'Temporary pacing',
        'Permanent pacemaker',
        'Bradycardia management'
      ]
    }
  },
  {
    id: generateId('Cardiovascular', 19),
    category: 'Cardiovascular',
    question: 'What are the signs of papillary muscle rupture?',
    answer: 'Acute severe mitral regurgitation, pulmonary edema, and cardiogenic shock following MI.',
    explanation: {
      detailed: 'Papillary muscle rupture is a severe mechanical complication of MI characterized by:\n\n1. Acute mitral regurgitation:\n   - Sudden onset holosystolic murmur\n   - Rapid hemodynamic deterioration\n2. Pulmonary edema:\n   - Due to acute left atrial pressure elevation\n   - Severe respiratory distress\n3. Cardiogenic shock:\n   - From sudden loss of forward flow\n   - Poor tissue perfusion\n4. Timing:\n   - Usually 2-7 days post-MI\n   - More common with inferior MI\n5. Associated findings:\n   - S3 gallop\n   - Pulmonary rales\n   - Hypotension',
      images: [],
      relatedConcepts: [
        'Mechanical complications of MI',
        'Acute mitral regurgitation',
        'Cardiogenic shock',
        'Emergency cardiac surgery',
        'Hemodynamic instability'
      ]
    }
  },
  {
    id: generateId('Cardiovascular', 20),
    category: 'Cardiovascular',
    question: 'What are the nursing considerations for patients on amiodarone?',
    answer: 'Monitor ECG, thyroid function, liver function, and watch for pulmonary toxicity.',
    explanation: {
      detailed: 'Nursing care for patients on amiodarone requires comprehensive monitoring:\n\n1. Cardiac monitoring:\n   - ECG changes (QT prolongation)\n   - Heart rate and rhythm\n   - Blood pressure\n2. Organ function monitoring:\n   - Thyroid function tests\n   - Liver function tests\n   - Chest X-ray/pulmonary function\n3. Side effect assessment:\n   - Pulmonary toxicity symptoms\n   - Photosensitivity\n   - Blue-gray skin discoloration\n4. Patient education:\n   - Sun protection\n   - Medication interactions\n   - Side effect recognition\n5. Long-term considerations:\n   - Regular organ function monitoring\n   - Cumulative dose tracking\n   - Drug-drug interactions',
      images: [],
      relatedConcepts: [
        'Antiarrhythmic therapy',
        'Drug toxicity monitoring',
        'Organ function assessment',
        'Patient education',
        'Long-term medication management'
      ]
    }
  },
  {
    id: generateId('Cardiovascular', 21),
    category: 'Cardiovascular',
    question: 'What are the signs of acute aortic regurgitation?',
    answer: "Early diastolic murmur, wide pulse pressure, peripheral signs (Corrigan\'s pulse, pistol shot sounds).",
    explanation: {
      detailed: 'Acute aortic regurgitation presents with distinctive signs:\n\n1. Cardiac auscultation:\n   - Early diastolic decrescendo murmur\n   - Best heard at left sternal border\n   - May be soft or difficult to hear\n2. Hemodynamic changes:\n   - Wide pulse pressure\n   - Rapid upstroke/collapse of pulse\n   - Hypotension with narrow pulse pressure in severe cases\n3. Peripheral signs:\n   - Corrigan\'s pulse (water-hammer pulse)\n   - Pistol shot sounds over femoral arteries\n   - De Musset\'s sign (head bobbing)\n4. Associated symptoms:\n   - Acute heart failure\n   - Dyspnea\n   - Chest pain\n5. Complications:\n   - Left ventricular volume overload\n   - Pulmonary edema\n   - Cardiogenic shock',
      images: [],
      relatedConcepts: [
        'Valvular heart disease',
        'Hemodynamic assessment',
        'Heart failure',
        'Physical examination',
        'Emergency valve surgery'
      ]
    }
  },
  {
    id: generateId('Cardiovascular', 22),
    category: 'Cardiovascular',
    question: 'What are the nursing considerations for patients on vasodilators?',
    answer: 'Monitor BP, HR, cardiac output, urine output, and watch for orthostatic hypotension.',
    explanation: {
      detailed: 'Nursing care for patients on vasodilators requires careful monitoring:\n\n1. Blood pressure monitoring:\n   - Frequent BP checks\n   - Orthostatic BP measurements\n   - Target BP ranges\n2. Cardiovascular assessment:\n   - Heart rate trends\n   - Cardiac output if available\n   - Peripheral perfusion\n3. Volume status:\n   - Urine output tracking\n   - Daily weights\n   - Fluid balance\n4. Patient safety:\n   - Fall precautions\n   - Gradual position changes\n   - Assistance with ambulation\n5. Medication management:\n   - Timing of administration\n   - Dose titration\n   - Drug interactions',
      images: [],
      relatedConcepts: [
        'Hemodynamic monitoring',
        'Orthostatic hypotension',
        'Fall prevention',
        'Medication safety',
        'Patient education'
      ]
    }
  },
  {
    id: generateId('Cardiovascular', 23),
    category: 'Cardiovascular',
    question: 'What are the signs of cardiac tamponade progression?',
    answer: 'Worsening hypotension, JVD, pulsus paradoxus >12 mmHg, electrical alternans on ECG.',
    explanation: {
      detailed: 'Progression of cardiac tamponade shows worsening signs:\n\n1. Hemodynamic deterioration:\n   - Worsening hypotension\n   - Increasing tachycardia\n   - Pulsus paradoxus >12 mmHg\n2. Clinical signs:\n   - Progressive JVD\n   - Muffled heart sounds\n   - Decreased pulse pressure\n3. ECG changes:\n   - Electrical alternans\n   - Low voltage QRS\n   - ST changes\n4. Echo findings:\n   - RV diastolic collapse\n   - RA collapse\n   - Swinging heart\n5. End-organ signs:\n   - Decreased urine output\n   - Mental status changes\n   - Cool extremities',
      images: [],
      relatedConcepts: [
        'Pericardial effusion',
        'Hemodynamic compromise',
        'Emergency pericardiocentesis',
        'ECG interpretation',
        'Echocardiographic assessment'
      ]
    }
  },
  {
    id: generateId('Cardiovascular', 24),
    category: 'Cardiovascular',
    question: 'What are the nursing considerations for patients with VADs?',
    answer: 'Monitor flow rates, anticoagulation, power source, prevent infection, assess for complications.',
    explanation: {
      detailed: 'Nursing care for VAD patients requires comprehensive monitoring:\n\n1. Device parameters:\n   - Flow rates/pump speed\n   - Power source management\n   - Device alarms/troubleshooting\n2. Anticoagulation:\n   - INR monitoring\n   - Bleeding precautions\n   - Thrombus prevention\n3. Infection prevention:\n   - Driveline site care\n   - Sterile technique\n   - Signs of infection\n4. Hemodynamic monitoring:\n   - Blood pressure\n   - Perfusion assessment\n   - Volume status\n5. Complication assessment:\n   - Device malfunction\n   - Arrhythmias\n   - Right heart failure\n6. Patient/caregiver education:\n   - Emergency procedures\n   - Power management\n   - Lifestyle modifications',
      images: [
        {
          url: 'https://www.ahajournals.org/cms/asset/f7f6d9b8-9c8e-42cc-a79f-b09d88ee3c4f/e006636fig02.jpg',
          caption: 'Components of a Ventricular Assist Device (VAD) system',
          alt: 'Diagram showing the main components of a VAD system including the pump, driveline, and power source'
        }
      ],
      relatedConcepts: [
        'Mechanical circulatory support',
        'Anticoagulation management',
        'Infection control',
        'Device troubleshooting',
        'Patient education'
      ]
    }
  },
  {
    id: generateId('Cardiovascular', 25),
    category: 'Cardiovascular',
    question: 'What are the signs of acute stent thrombosis?',
    answer: 'Sudden chest pain, ST elevation in stented territory, hemodynamic compromise, possible cardiac arrest.',
    explanation: {
      detailed: 'Stent thrombosis presents with:\n\n1. Chest pain:\n   - Sudden onset\n   - Similar to initial MI\n2. ECG changes:\n   - ST elevation in stented territory\n   - May show new Q waves\n3. Clinical deterioration:\n   - Hemodynamic compromise\n   - Possible cardiac arrest\n4. Timing categories:\n   - Acute: 0-24 hours\n   - Subacute: 24 hours - 30 days\n   - Late: >30 days',
      images: [],
      relatedConcepts: [
        'Dual antiplatelet therapy',
        'PCI complications',
        'Anticoagulation',
        'Emergency revascularization',
        'Stent placement'
      ]
    }
  },
  {
    id: generateId('Cardiovascular', 26),
    category: 'Cardiovascular',
    question: 'What are the signs of right heart failure?',
    answer: 'JVD, peripheral edema, hepatomegaly, and right-sided S3. May have clear lungs.',
    explanation: {
      detailed: 'Right heart failure presents with:\n\n1. Venous congestion signs:\n   - Jugular venous distention\n   - Peripheral edema\n   - Hepatomegaly\n2. Cardiac findings:\n   - Right-sided S3\n   - RV heave\n3. Respiratory status:\n   - Often clear lungs\n   - Unlike left heart failure\n4. Other signs:\n   - Ascites\n   - Weight gain\n   - Exercise intolerance',
      images: [],
      relatedConcepts: [
        'Cor pulmonale',
        'Tricuspid regurgitation',
        'Pulmonary hypertension',
        'Volume status',
        'Diuretic therapy'
      ]
    }
  },
  {
    id: generateId('Cardiovascular', 27),
    category: 'Cardiovascular',
    question: 'What are the nursing considerations for patients with an IABP?',
    answer: 'Monitor timing/augmentation, assess distal pulses, maintain straight leg, watch for bleeding/ischemia.',
    explanation: {
      detailed: 'IABP nursing care includes:\n\n1. Timing/augmentation:\n   - Check waveform timing\n   - Ensure proper triggering\n   - Monitor effectiveness\n2. Circulation checks:\n   - Distal pulses q1h\n   - Leg temperature\n   - Color and sensation\n3. Position management:\n   - Keep leg straight\n   - No hip flexion\n   - Head <30 degrees\n4. Complications watch:\n   - Bleeding at site\n   - Limb ischemia\n   - Thrombocytopenia',
      images: [],
      relatedConcepts: [
        'Mechanical circulatory support',
        'Timing principles',
        'Vascular complications',
        'Anticoagulation',
        'Hemodynamic monitoring'
      ]
    }
  },
  {
    id: generateId('Cardiovascular', 28),
    category: 'Cardiovascular',
    question: 'What are the signs of aortic dissection?',
    answer: 'Sudden tearing chest pain radiating to back, pulse deficits, BP differences between arms, neurologic symptoms.',
    explanation: {
      detailed: 'Aortic dissection presents with:\n\n1. Classic pain:\n   - Sudden, severe chest pain\n   - Tearing/ripping quality\n   - Back radiation\n2. Vascular findings:\n   - Pulse deficits\n   - BP differences >20 mmHg\n3. Associated symptoms:\n   - Neurologic deficits\n   - Syncope\n   - End-organ ischemia\n4. Risk factors:\n   - Hypertension\n   - Connective tissue disorders\n   - Previous cardiac surgery',
      images: [],
      relatedConcepts: [
        'Stanford classification',
        'Blood pressure control',
        'Surgical emergency',
        'Beta blocker therapy',
        'Imaging studies'
      ]
    }
  },

  // Respiratory (50 cards)
  {
    id: generateId('Respiratory', 0),
    category: 'Respiratory',
    question: 'What are normal arterial blood gas values?',
    answer: 'pH: 7.35-7.45, PaO2: 80-100 mmHg, PaCO2: 35-45 mmHg, HCO3: 22-26 mEq/L, O2 saturation: 95-100%',
    explanation: {
      detailed: 'Normal arterial blood gas values include:\n\n1. pH: 7.35-7.45\n   - Reflects acid-base balance\n   - Key for metabolic/respiratory status\n2. PaO2: 80-100 mmHg\n   - Indicates oxygenation\n   - May vary with age/altitude\n3. PaCO2: 35-45 mmHg\n   - Reflects ventilation\n   - Key for respiratory status\n4. HCO3: 22-26 mEq/L\n   - Indicates metabolic component\n   - Compensation marker\n5. O2 saturation: 95-100%\n   - Overall oxygen carrying capacity\n   - Affected by hemoglobin',
      images: [],
      relatedConcepts: [
        'Acid-base balance',
        'Oxygenation assessment',
        'Ventilation status',
        'Metabolic disorders',
        'Respiratory disorders'
      ]
    }
  },
  {
    id: generateId('Respiratory', 1),
    category: 'Respiratory',
    question: 'What are the diagnostic criteria for ARDS?',
    answer: 'Acute onset within 1 week, bilateral infiltrates on chest imaging, PaO2/FiO2 ratio < 300, and respiratory failure not explained by cardiac failure.',
    explanation: {
      detailed: 'The Berlin Definition of ARDS includes:\n\n1. Timing: Acute onset within 1 week of known clinical insult\n2. Chest Imaging: Bilateral opacities not fully explained by effusions, collapse, or nodules\n3. Origin of Edema: Respiratory failure not fully explained by cardiac failure or fluid overload\n4. Oxygenation (with PEEP ≥5 cm H2O):\n   - Mild: 200 < PaO2/FiO2 ≤ 300\n   - Moderate: 100 < PaO2/FiO2 ≤ 200\n   - Severe: PaO2/FiO2 ≤ 100',
      images: [
        {
          url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8a/ARDS_X-ray.jpg/800px-ARDS_X-ray.jpg',
          caption: 'Chest X-ray showing bilateral infiltrates characteristic of ARDS',
          alt: 'Chest X-ray image showing bilateral pulmonary infiltrates in ARDS'
        }
      ],
      relatedConcepts: [
        'Berlin Definition',
        'Mechanical ventilation',
        'Lung protective strategy',
        'Prone positioning',
        'PEEP optimization'
      ]
    }
  },
  {
    id: generateId('Respiratory', 2),
    category: 'Respiratory',
    question: 'What are the components of lung-protective ventilation?',
    answer: 'Tidal volume 4-6 mL/kg IBW, plateau pressure <30 cmH2O, appropriate PEEP, and permissive hypercapnia if needed.',
    explanation: {
      detailed: 'Lung-protective ventilation strategy includes:\n\n1. Low Tidal Volumes:\n   - 4-6 mL/kg ideal body weight\n   - Prevents overdistension\n2. Plateau Pressure Limitation:\n   - Keep <30 cmH2O\n   - Reduces barotrauma risk\n3. PEEP Optimization:\n   - Prevents atelectasis\n   - Improves oxygenation\n4. Permissive Hypercapnia:\n   - Acceptable if pH >7.20\n   - Reduces ventilator-induced injury',
      images: [],
      relatedConcepts: [
        'ARDS Network protocol',
        'Ventilator-induced lung injury',
        'Driving pressure',
        'Recruitment maneuvers',
        'Stress and strain'
      ]
    }
  },
  {
    id: generateId('Respiratory', 3),
    category: 'Respiratory',
    question: 'What are the indications for prone positioning in ARDS?',
    answer: 'Severe ARDS with P/F ratio <150, early in disease course, and after ensuring no contraindications exist.',
    explanation: {
      detailed: 'Prone positioning in ARDS is indicated when:\n\n1. Severity criteria:\n   - P/F ratio <150 mmHg\n   - Severe hypoxemia despite optimal ventilation\n2. Timing:\n   - Early in disease course (within 36-48 hours)\n   - Before fibroproliferative phase\n3. Prerequisites:\n   - No contraindications\n   - Adequate staffing\n   - Proper equipment',
      images: [],
      relatedConcepts: [
        'ARDS management',
        'Oxygenation improvement',
        'Ventilation-perfusion matching',
        'Recruitment maneuvers',
        'Team coordination'
      ]
    }
  },
  {
    id: generateId('Respiratory', 4),
    category: 'Respiratory',
    question: 'What are the signs of tension pneumothorax?',
    answer: 'Sudden respiratory distress, decreased breath sounds, tracheal deviation, hypotension, and distended neck veins.',
    explanation: {
      detailed: 'Tension pneumothorax presents with:\n\n1. Respiratory symptoms:\n   - Sudden severe dyspnea\n   - Decreased/absent breath sounds\n   - Tracheal deviation away from affected side\n2. Cardiovascular signs:\n   - Hypotension\n   - Distended neck veins\n   - Tachycardia\n3. Other findings:\n   - Chest pain\n   - Anxiety/agitation\n   - Rapid deterioration',
      images: [],
      relatedConcepts: [
        'Emergency decompression',
        'Needle thoracostomy',
        'Chest tube placement',
        'Mechanical ventilation',
        'Trauma management'
      ]
    }
  },
  {
    id: generateId('Respiratory', 5),
    category: 'Respiratory',
    question: 'What are the nursing interventions for preventing VAP?',
    answer: 'Head of bed elevation 30-45°, oral care with chlorhexidine, suctioning as needed, and daily sedation interruption.',
    explanation: {
      detailed: 'VAP prevention bundle includes:\n\n1. Head of bed elevation:\n   - Maintain 30-45 degrees\n   - Check position regularly\n2. Oral care:\n   - Chlorhexidine use\n   - Regular frequency\n3. Suctioning protocol:\n   - As needed basis\n   - Sterile technique\n4. Daily interventions:\n   - Sedation interruption\n   - Readiness to extubate assessment\n   - Oral care documentation',
      images: [],
      relatedConcepts: [
        'VAP bundle',
        'Infection prevention',
        'Oral hygiene',
        'Sedation management',
        'Evidence-based practice'
      ]
    }
  },
  {
    id: generateId('Respiratory', 6),
    category: 'Respiratory',
    question: 'What are the indications for HFNC oxygen therapy?',
    answer: 'Hypoxemic respiratory failure, post-extubation support, and patients not tolerating conventional oxygen delivery.',
    explanation: {
      detailed: 'High-Flow Nasal Cannula (HFNC) therapy is indicated for:\n\n1. Hypoxemic respiratory failure:\n   - Moderate to severe hypoxemia\n   - Increased work of breathing\n2. Post-extubation support:\n   - High-risk patients\n   - Bridge to self-ventilation\n3. Conventional O2 intolerance:\n   - Comfort issues\n   - Flow requirements >6L/min\n4. Other conditions:\n   - Acute heart failure\n   - Immunocompromised patients',
      images: [],
      relatedConcepts: [
        'Oxygen therapy',
        'Respiratory support',
        'Work of breathing',
        'Humidification',
        'Patient comfort'
      ]
    }
  },
  {
    id: generateId('Respiratory', 7),
    category: 'Respiratory',
    question: 'What are the signs of pulmonary embolism?',
    answer: 'Sudden dyspnea, chest pain, tachycardia, hypoxemia, and possible hemoptysis.',
    explanation: {
      detailed: 'Pulmonary embolism (PE) typically presents with:\n\n1. Respiratory symptoms:\n   - Sudden onset dyspnea\n   - Pleuritic chest pain\n   - Hemoptysis (in ~30%)\n2. Cardiovascular signs:\n   - Tachycardia\n   - Hypoxemia\n   - Right heart strain\n3. Risk factors:\n   - Immobility\n   - Surgery\n   - Cancer\n   - Thrombophilia',
      images: [],
      relatedConcepts: [
        'DVT prophylaxis',
        'Anticoagulation',
        'Right heart failure',
        'D-dimer testing',
        'CT angiography'
      ]
    }
  },
  {
    id: generateId('Respiratory', 8),
    category: 'Respiratory',
    question: 'What are the weaning parameters for mechanical ventilation?',
    answer: 'RSBI <105, negative inspiratory force >-20 cmH2O, vital capacity >10-15 mL/kg, and adequate gas exchange.',
    explanation: {
      detailed: 'Weaning parameters assessment includes:\n\n1. Respiratory mechanics:\n   - RSBI (f/VT) <105\n   - NIF >-20 cmH2O\n   - Vital capacity >10-15 mL/kg\n2. Gas exchange:\n   - PaO2/FiO2 >200\n   - PEEP ≤5-8 cmH2O\n3. Clinical status:\n   - Hemodynamic stability\n   - Adequate mental status\n   - No significant secretions',
      images: [],
      relatedConcepts: [
        'Spontaneous breathing trial',
        'Extubation readiness',
        'Weaning protocols',
        'Post-extubation monitoring',
        'Respiratory muscle strength'
      ]
    }
  },
  {
    id: generateId('Respiratory', 9),
    category: 'Respiratory',
    question: 'What are the indications for chest tube placement?',
    answer: 'Pneumothorax, hemothorax, pleural effusion, empyema, and post-thoracic surgery.',
    explanation: {
      detailed: 'Chest tube placement is indicated in several clinical scenarios:\n\n1. Pneumothorax:\n   - Spontaneous pneumothorax >20%\n   - Tension pneumothorax after needle decompression\n   - Persistent air leak\n2. Hemothorax:\n   - Acute bleeding in pleural space\n   - Evacuation of blood collections\n3. Pleural effusion:\n   - Symptomatic effusions\n   - Malignant effusions\n   - Large effusions causing compression\n4. Empyema:\n   - Infected pleural space\n   - Purulent drainage\n5. Post-surgical:\n   - After thoracic surgery\n   - Monitoring for bleeding/air leak\n6. Monitoring requirements:\n   - Drainage amount/characteristics\n   - Air leak assessment\n   - Suction settings',
      images: [],
      relatedConcepts: [
        'Pleural space management',
        'Drainage systems',
        'Sterile technique',
        'Complications monitoring',
        'Patient positioning'
      ]
    }
  },
  {
    id: generateId('Respiratory', 10),
    category: 'Respiratory',
    question: 'What are the indications for initiating BiPAP?',
    answer: 'Acute respiratory failure, COPD exacerbation, cardiogenic pulmonary edema, and neuromuscular weakness.',
    explanation: {
      detailed: 'BiPAP therapy is indicated in various respiratory conditions:\n\n1. Acute respiratory failure:\n   - Hypercapnic respiratory failure\n   - Moderate hypoxemia\n   - Increased work of breathing\n2. COPD exacerbation:\n   - Acute respiratory acidosis\n   - Persistent dyspnea\n   - Prevention of intubation\n3. Cardiogenic pulmonary edema:\n   - Respiratory distress\n   - Hypoxemia\n   - Increased preload reduction\n4. Neuromuscular weakness:\n   - Support of respiratory muscles\n   - Prevention of atelectasis\n   - Nocturnal support\n5. Monitoring parameters:\n   - IPAP/EPAP settings\n   - Patient synchrony\n   - Mask fit/skin integrity',
      images: [],
      relatedConcepts: [
        'Non-invasive ventilation',
        'Respiratory support',
        'Patient comfort',
        'Mask interface',
        'Ventilation monitoring'
      ]
    }
  },
  {
    id: generateId('Respiratory', 11),
    category: 'Respiratory',
    question: 'What are the signs of pulmonary barotrauma?',
    answer: 'Sudden onset of hypoxemia, decreased breath sounds, subcutaneous emphysema, pneumothorax.',
    explanation: {
      detailed: 'Pulmonary barotrauma presents with several key signs:\n\n1. Respiratory deterioration:\n   - Sudden onset hypoxemia\n   - Increased work of breathing\n   - Decreased breath sounds\n2. Physical findings:\n   - Subcutaneous emphysema\n   - Chest wall crepitus\n   - Tracheal deviation (if tension)\n3. Associated conditions:\n   - Pneumothorax\n   - Pneumomediastinum\n   - Air leak syndrome\n4. Risk factors:\n   - High airway pressures\n   - Underlying lung disease\n   - Mechanical ventilation\n5. Monitoring needs:\n   - Ventilator parameters\n   - Chest X-ray changes\n   - Hemodynamic status',
      images: [],
      relatedConcepts: [
        'Ventilator-induced injury',
        'Pressure monitoring',
        'Emergency management',
        'Chest imaging',
        'Patient assessment'
      ]
    }
  },
  {
    id: generateId('Respiratory', 12),
    category: 'Respiratory',
    question: 'What are the nursing interventions for preventing atelectasis?',
    answer: 'Early mobilization, incentive spirometry, chest physiotherapy, and proper positioning.',
    explanation: {
      detailed: 'Prevention of atelectasis requires multiple interventions:\n\n1. Early mobilization:\n   - Progressive activity\n   - Sitting position\n   - Ambulation as tolerated\n2. Breathing exercises:\n   - Incentive spirometry\n   - Deep breathing\n   - Coughing exercises\n3. Chest physiotherapy:\n   - Percussion and vibration\n   - Postural drainage\n   - Manual hyperinflation\n4. Positioning strategies:\n   - Head of bed elevation\n   - Regular position changes\n   - Optimal lung expansion\n5. Additional measures:\n   - Pain management\n   - Adequate hydration\n   - Airway clearance\n6. Monitoring:\n   - Breath sounds\n   - Oxygen saturation\n   - Work of breathing',
      images: [],
      relatedConcepts: [
        'Pulmonary hygiene',
        'Mobilization protocols',
        'Pain control',
        'Respiratory assessment',
        'Patient education'
      ]
    }
  },
  {
    id: generateId('Respiratory', 13),
    category: 'Respiratory',
    question: 'What are the signs of impending respiratory failure?',
    answer: 'Increased work of breathing, altered mental status, respiratory rate >30 or <8, decreasing SpO2.',
    explanation: {
      detailed: 'Recognition of impending respiratory failure involves multiple signs:\n\n1. Work of breathing:\n   - Increased respiratory rate\n   - Use of accessory muscles\n   - Paradoxical breathing\n2. Mental status changes:\n   - Agitation\n   - Confusion\n   - Somnolence\n3. Vital sign changes:\n   - Respiratory rate >30 or <8\n   - Decreasing SpO2\n   - Tachycardia\n4. Gas exchange:\n   - Hypoxemia\n   - Hypercapnia\n   - Acidosis\n5. Physical findings:\n   - Diaphoresis\n   - Cyanosis\n   - Decreased breath sounds\n6. Late signs:\n   - Bradycardia\n   - Irregular breathing\n   - Loss of consciousness',
      images: [],
      relatedConcepts: [
        'Respiratory assessment',
        'Gas exchange',
        'Airway management',
        'Emergency intervention',
        'Monitoring parameters'
      ]
    }
  },
  {
    id: generateId('Respiratory', 14),
    category: 'Respiratory',
    question: 'What are the components of the FAST HUG protocol?',
    answer: 'Feeding, Analgesia, Sedation, Thromboembolic prophylaxis, Head-of-bed elevation, Ulcer prophylaxis, Glucose control.',
    explanation: {
      detailed: 'The FAST HUG protocol includes daily assessment of:\n\n1. Feeding:\n   - Nutritional status\n   - Enteral/parenteral feeding\n   - Feeding tolerance\n2. Analgesia:\n   - Pain assessment\n   - Pain management\n   - Side effect monitoring\n3. Sedation:\n   - Level assessment\n   - Daily interruption\n   - Target RASS score\n4. Thromboembolic prophylaxis:\n   - Mechanical methods\n   - Pharmacological prophylaxis\n   - Contraindications\n5. Head-of-bed elevation:\n   - 30-45 degrees\n   - VAP prevention\n   - Aspiration risk\n6. Ulcer prophylaxis:\n   - Stress ulcer prevention\n   - GI bleeding risk\n   - Medication review\n7. Glucose control:\n   - Blood glucose monitoring\n   - Insulin management\n   - Target range maintenance',
      images: [],
      relatedConcepts: [
        'Critical care bundles',
        'Daily assessment',
        'Preventive care',
        'Quality measures',
        'Patient safety'
      ]
    }
  },
  {
    id: generateId('Respiratory', 15),
    category: 'Respiratory',
    question: 'What are the signs of ventilator asynchrony?',
    answer: 'Double triggering, ineffective efforts, auto-triggering, flow asynchrony, and patient discomfort.',
    explanation: {
      detailed: 'Ventilator asynchrony manifests in several ways:\n\n1. Double triggering:\n   - Multiple inspiratory efforts\n   - Short expiratory time\n   - Stacked breaths\n2. Ineffective efforts:\n   - Patient effort without ventilator response\n   - Increased work of breathing\n   - Patient distress\n3. Auto-triggering:\n   - Ventilator breaths without patient effort\n   - Circuit leaks\n   - Cardiac oscillations\n4. Flow asynchrony:\n   - Inadequate flow rates\n   - Flow starvation\n   - Patient discomfort\n5. Contributing factors:\n   - Inappropriate settings\n   - Patient condition\n   - Circuit issues\n6. Management strategies:\n   - Setting adjustments\n   - Mode changes\n   - Patient assessment',
      images: [],
      relatedConcepts: [
        'Ventilator management',
        'Patient comfort',
        'Respiratory mechanics',
        'Setting optimization',
        'Patient monitoring'
      ]
    }
  },
  {
    id: generateId('Respiratory', 16),
    category: 'Respiratory',
    question: 'What are the signs of acute respiratory distress syndrome (ARDS)?',
    answer: 'Acute onset hypoxemia, bilateral infiltrates, non-cardiogenic pulmonary edema.',
    explanation: {
      detailed: 'ARDS presents with characteristic features:\n\n1. Diagnostic criteria:\n   - Acute onset (<1 week)\n   - PaO2/FiO2 ratio ≤300\n   - Bilateral opacities\n   - Non-cardiogenic edema\n2. Clinical presentation:\n   - Severe dyspnea\n   - Refractory hypoxemia\n   - Decreased compliance\n3. Radiographic findings:\n   - Bilateral infiltrates\n   - Ground-glass opacities\n   - Air bronchograms\n4. Ventilator management:\n   - Low tidal volume\n   - Higher PEEP\n   - Prone positioning\n5. Monitoring needs:\n   - Oxygenation\n   - Plateau pressures\n   - Hemodynamics\n6. Complications:\n   - Barotrauma\n   - Ventilator-associated injury\n   - Multi-organ failure',
      images: [],
      relatedConcepts: [
        'Lung protective ventilation',
        'Prone positioning',
        'Oxygenation strategies',
        'PEEP titration',
        'Recruitment maneuvers'
      ]
    }
  },
  {
    id: generateId('Respiratory', 17),
    category: 'Respiratory',
    question: 'What are the nursing considerations for prone positioning?',
    answer: 'Proper positioning technique, pressure point care, ETT/line security, and hemodynamic monitoring.',
    explanation: {
      detailed: 'Prone positioning requires careful attention to multiple aspects:\n\n1. Pre-positioning preparation:\n   - Team coordination\n   - Equipment check\n   - Line/tube security\n2. Positioning technique:\n   - Proper body alignment\n   - Head positioning\n   - Arm placement\n3. Pressure point care:\n   - Face protection\n   - Chest/pelvis support\n   - Extremity positioning\n4. Monitoring:\n   - ETT position\n   - Hemodynamics\n   - Skin integrity\n5. Complications prevention:\n   - Facial edema\n   - Pressure injuries\n   - Line displacement\n6. Duration management:\n   - 16-18 hours prone\n   - Scheduled position changes\n   - Assessment intervals',
      images: [],
      relatedConcepts: [
        'ARDS management',
        'Team coordination',
        'Pressure injury prevention',
        'Line management',
        'Patient safety'
      ]
    }
  },
  {
    id: generateId('Respiratory', 18),
    category: 'Respiratory',
    question: 'What are the signs of ventilator-associated pneumonia (VAP)?',
    answer: 'New infiltrates, increased secretions, fever, leukocytosis, and worsening gas exchange.',
    explanation: {
      detailed: 'VAP diagnosis involves multiple clinical indicators:\n\n1. Clinical signs:\n   - Fever >38.3°C\n   - Purulent secretions\n   - Worsening oxygenation\n2. Radiographic changes:\n   - New/progressive infiltrates\n   - Consolidation\n   - Air bronchograms\n3. Laboratory findings:\n   - Leukocytosis/leukopenia\n   - Positive cultures\n   - Inflammatory markers\n4. Gas exchange:\n   - Increased O2 requirements\n   - Ventilation changes\n   - CO2 retention\n5. Prevention strategies:\n   - HOB elevation\n   - Oral care\n   - Subglottic suctioning\n6. Monitoring needs:\n   - Daily VAP assessment\n   - Bundle compliance\n   - Culture results',
      images: [],
      relatedConcepts: [
        'VAP prevention bundle',
        'Infection control',
        'Antibiotic stewardship',
        'Ventilator care',
        'Quality metrics'
      ]
    }
  },
  {
    id: generateId('Respiratory', 19),
    category: 'Respiratory',
    question: 'What are the nursing interventions for managing bronchospasm?',
    answer: 'Bronchodilators, positioning, oxygen therapy, anxiety reduction, and monitoring response.',
    explanation: {
      detailed: 'Management of bronchospasm requires multiple interventions:\n\n1. Immediate actions:\n   - Oxygen administration\n   - Patient positioning\n   - Medication delivery\n2. Medication management:\n   - Bronchodilator administration\n   - Proper inhaler technique\n   - Timing of medications\n3. Patient positioning:\n   - Upright position\n   - Tripod positioning\n   - Relaxation techniques\n4. Monitoring:\n   - Work of breathing\n   - Breath sounds\n   - SpO2 levels\n5. Anxiety management:\n   - Reassurance\n   - Breathing exercises\n   - Calm environment\n6. Documentation:\n   - Response to interventions\n   - Medication effectiveness\n   - Trigger identification',
      images: [],
      relatedConcepts: [
        'Bronchodilator therapy',
        'Respiratory assessment',
        'Patient education',
        'Medication delivery',
        'Emergency response'
      ]
    }
  },
  {
    id: generateId('Respiratory', 20),
    category: 'Respiratory',
    question: 'What are the signs of pulmonary embolism?',
    answer: 'Sudden dyspnea, chest pain, tachycardia, hypoxemia, and anxiety.',
    explanation: {
      detailed: 'Pulmonary embolism presents with various signs and symptoms:\n\n1. Primary symptoms:\n   - Sudden onset dyspnea\n   - Pleuritic chest pain\n   - Anxiety/apprehension\n2. Vital sign changes:\n   - Tachycardia\n   - Tachypnea\n   - Hypoxemia\n3. Physical findings:\n   - Unilateral leg swelling\n   - Decreased breath sounds\n   - Pleural rub\n4. Risk factors:\n   - Immobility\n   - Surgery/trauma\n   - Hypercoagulable states\n5. Diagnostic indicators:\n   - D-dimer elevation\n   - ECG changes\n   - CT findings\n6. Monitoring needs:\n   - Hemodynamic status\n   - Oxygenation\n   - Anticoagulation',
      images: [],
      relatedConcepts: [
        'DVT prevention',
        'Anticoagulation therapy',
        'Emergency management',
        'Risk assessment',
        'Diagnostic testing'
      ]
    }
  },
  {
    id: generateId('Respiratory', 21),
    category: 'Respiratory',
    question: 'What are the nursing considerations for chest tube removal?',
    answer: 'Timing, patient positioning, Valsalva maneuver, occlusive dressing, and pain management.',
    explanation: {
      detailed: 'Chest tube removal requires careful attention to procedure:\n\n1. Pre-removal assessment:\n   - Chest X-ray review\n   - Air leak check\n   - Drainage amount\n2. Patient preparation:\n   - Explanation of procedure\n   - Pain medication\n   - Proper positioning\n3. Removal technique:\n   - Valsalva maneuver timing\n   - Quick removal\n   - Immediate occlusion\n4. Dressing application:\n   - Petroleum gauze\n   - Occlusive dressing\n   - Reinforcement\n5. Post-removal monitoring:\n   - Breath sounds\n   - Vital signs\n   - Chest X-ray\n6. Documentation:\n   - Procedure details\n   - Patient response\n   - Assessment findings',
      images: [],
      relatedConcepts: [
        'Sterile technique',
        'Pain management',
        'Patient education',
        'Wound care',
        'Assessment skills'
      ]
    }
  },
  {
    id: generateId('Respiratory', 22),
    category: 'Respiratory',
    question: 'What are the signs of tension pneumothorax?',
    answer: 'Sudden respiratory distress, tracheal deviation, absent breath sounds, hypotension, JVD.',
    explanation: {
      detailed: 'Tension pneumothorax presents with critical signs:\n\n1. Respiratory findings:\n   - Sudden respiratory distress\n   - Absent unilateral breath sounds\n   - Hyperresonance to percussion\n2. Physical signs:\n   - Tracheal deviation away\n   - JVD\n   - Chest asymmetry\n3. Hemodynamic changes:\n   - Hypotension\n   - Tachycardia\n   - Shock\n4. Patient symptoms:\n   - Severe dyspnea\n   - Chest pain\n   - Anxiety\n5. Late findings:\n   - Cardiac arrest\n   - Consciousness changes\n   - Cyanosis\n6. Emergency management:\n   - Needle decompression\n   - Chest tube placement\n   - Continuous monitoring',
      images: [],
      relatedConcepts: [
        'Emergency response',
        'Needle decompression',
        'Chest tube management',
        'Trauma care',
        'Assessment skills'
      ]
    }
  },
  {
    id: generateId('Respiratory', 23),
    category: 'Respiratory',
    question: 'What are the nursing interventions for managing hemoptysis?',
    answer: 'Position patient, suction airway, oxygen therapy, monitor amount, identify cause.',
    explanation: {
      detailed: 'Management of hemoptysis requires systematic approach:\n\n1. Initial actions:\n   - Patient positioning\n   - Airway clearance\n   - Oxygen administration\n2. Assessment:\n   - Amount of bleeding\n   - Color/characteristics\n   - Associated symptoms\n3. Monitoring:\n   - Vital signs\n   - Oxygenation\n   - Mental status\n4. Documentation:\n   - Blood amount\n   - Timing/frequency\n   - Associated factors\n5. Interventions:\n   - Suctioning technique\n   - Specimen collection\n   - Emergency equipment\n6. Prevention:\n   - Trigger avoidance\n   - Medication review\n   - Patient education',
      images: [],
      relatedConcepts: [
        'Airway management',
        'Emergency response',
        'Assessment skills',
        'Documentation',
        'Patient safety'
      ]
    }
  },
  {
    id: generateId('Respiratory', 24),
    category: 'Respiratory',
    question: 'What are the nursing considerations for tracheostomy care?',
    answer: 'Sterile suctioning, stoma care, cuff pressure monitoring, emergency equipment availability.',
    explanation: {
      detailed: 'Tracheostomy care involves multiple components:\n\n1. Suctioning technique:\n   - Sterile procedure\n   - Proper catheter size\n   - Suction pressure\n2. Stoma care:\n   - Cleaning technique\n   - Dressing changes\n   - Skin assessment\n3. Equipment monitoring:\n   - Cuff pressure checks\n   - Inner cannula cleaning\n   - Emergency supplies\n4. Patient assessment:\n   - Breath sounds\n   - Secretion characteristics\n   - Work of breathing\n5. Complication prevention:\n   - Infection control\n   - Pressure injury\n   - Tube displacement\n6. Patient education:\n   - Communication methods\n   - Self-care techniques\n   - Emergency response',
      images: [],
      relatedConcepts: [
        'Airway management',
        'Infection control',
        'Patient education',
        'Emergency preparedness',
        'Wound care'
      ]
    }
  },
  {
    id: generateId('Respiratory', 25),
    category: 'Respiratory',
    question: 'What are the signs of respiratory muscle fatigue?',
    answer: 'Paradoxical breathing, tachypnea, shallow breathing, accessory muscle use, anxiety.',
    explanation: {
      detailed: 'Respiratory muscle fatigue presents with progressive signs:\n\n1. Breathing pattern:\n   - Paradoxical movement\n   - Rapid shallow breathing\n   - Irregular rhythm\n2. Physical signs:\n   - Accessory muscle use\n   - Nasal flaring\n   - Intercostal retractions\n3. Patient symptoms:\n   - Increased anxiety\n   - Air hunger\n   - Inability to speak\n4. Vital signs:\n   - Tachypnea\n   - Tachycardia\n   - SpO2 changes\n5. Late signs:\n   - Decreased respiratory effort\n   - Mental status changes\n   - Respiratory failure\n6. Interventions:\n   - Ventilatory support\n   - Position changes\n   - Rest periods',
      images: [],
      relatedConcepts: [
        'Work of breathing',
        'Ventilatory support',
        'Assessment skills',
        'Emergency intervention',
        'Patient monitoring'
      ]
    }
  },

  // Endocrine (50 cards)
  {
    id: generateId('Endocrine', 0),
    category: 'Endocrine',
    question: 'What are the diagnostic criteria for DKA?',
    answer: 'Blood glucose >250 mg/dL, arterial pH <7.3, serum bicarbonate <18 mEq/L, and presence of ketones.',
    explanation: {
      detailed: 'Diabetic Ketoacidosis (DKA) is diagnosed based on specific criteria:\n\n1. Hyperglycemia: Blood glucose >250 mg/dL\n2. Acidosis: Arterial pH <7.3\n3. Bicarbonate depletion: Serum bicarbonate <18 mEq/L\n4. Ketosis: Presence of ketones in blood/urine\n\nAdditional findings may include:\n- Elevated anion gap\n- Electrolyte abnormalities\n- Signs of dehydration',
      images: [],
      relatedConcepts: [
        'Hyperglycemia',
        'Metabolic acidosis',
        'Ketogenesis',
        'Fluid and electrolyte balance',
        'Insulin deficiency'
      ]
    }
  },
  {
    id: generateId('Endocrine', 1),
    category: 'Endocrine',
    question: 'What are the signs of diabetic ketoacidosis (DKA)?',
    answer: 'Hyperglycemia, ketosis, metabolic acidosis, dehydration, and Kussmaul respirations.',
    explanation: {
      detailed: 'DKA presents with characteristic signs and symptoms:\n\n1. Metabolic derangements:\n   - Blood glucose >250 mg/dL\n   - Anion gap metabolic acidosis\n   - Positive serum/urine ketones\n2. Clinical presentation:\n   - Kussmaul respirations\n   - Fruity breath odor\n   - Severe dehydration\n3. Symptoms:\n   - Polyuria\n   - Polydipsia\n   - Nausea/vomiting\n4. Vital sign changes:\n   - Tachycardia\n   - Hypotension\n   - Tachypnea\n5. Laboratory findings:\n   - High serum osmolality\n   - Elevated BUN/Cr\n   - Electrolyte imbalances\n6. Treatment priorities:\n   - Fluid resuscitation\n   - Insulin therapy\n   - Electrolyte correction',
      images: [],
      relatedConcepts: [
        'Fluid management',
        'Insulin therapy',
        'Electrolyte balance',
        'Acid-base balance',
        'Monitoring protocols'
      ]
    }
  },
  {
    id: generateId('Endocrine', 2),
    category: 'Endocrine',
    question: 'What are the nursing considerations for insulin administration?',
    answer: 'Site rotation, proper technique, timing with meals, blood glucose monitoring, hypoglycemia prevention.',
    explanation: {
      detailed: 'Insulin administration requires careful attention to multiple factors:\n\n1. Administration technique:\n   - Site selection/rotation\n   - Proper injection method\n   - Insulin preparation\n2. Timing considerations:\n   - Meal coordination\n   - Activity planning\n   - Peak action times\n3. Monitoring requirements:\n   - Blood glucose checks\n   - Injection site assessment\n   - Signs of complications\n4. Patient education:\n   - Self-administration\n   - Site rotation\n   - Storage requirements\n5. Safety measures:\n   - Double checks\n   - Proper labeling\n   - Emergency supplies\n6. Documentation:\n   - Blood glucose results\n   - Insulin doses\n   - Patient response',
      images: [],
      relatedConcepts: [
        'Diabetes management',
        'Medication safety',
        'Patient education',
        'Blood glucose monitoring',
        'Complication prevention'
      ]
    }
  },
  {
    id: generateId('Endocrine', 3),
    category: 'Endocrine',
    question: 'What are the signs of thyroid storm?',
    answer: 'Extreme hyperthermia, tachycardia, agitation, tremors, and heart failure.',
    explanation: {
      detailed: 'Thyroid storm is a life-threatening condition with multiple manifestations:\n\n1. Cardiovascular signs:\n   - Severe tachycardia\n   - Atrial fibrillation\n   - High output failure\n2. Thermoregulation:\n   - Extreme hyperthermia\n   - Profuse sweating\n   - Heat intolerance\n3. Neurological symptoms:\n   - Severe agitation\n   - Tremors\n   - Altered consciousness\n4. Gastrointestinal:\n   - Nausea/vomiting\n   - Diarrhea\n   - Abdominal pain\n5. Metabolic changes:\n   - Hyperglycemia\n   - Electrolyte imbalances\n   - Metabolic acidosis\n6. Treatment priorities:\n   - Beta blockade\n   - Antithyroid drugs\n   - Supportive care',
      images: [],
      relatedConcepts: [
        'Thyroid crisis',
        'Emergency management',
        'Medication therapy',
        'Vital sign monitoring',
        'Multi-organ support'
      ]
    }
  },
  {
    id: generateId('Endocrine', 4),
    category: 'Endocrine',
    question: 'What are the signs of myxedema coma?',
    answer: 'Hypothermia, bradycardia, hypotension, altered mental status, and hypoventilation.',
    explanation: {
      detailed: 'Myxedema coma presents with severe manifestations:\n\n1. Neurological signs:\n   - Altered mental status\n   - Lethargy/coma\n   - Seizures\n2. Cardiovascular:\n   - Severe bradycardia\n   - Hypotension\n   - Cardiogenic shock\n3. Respiratory:\n   - Hypoventilation\n   - CO2 retention\n   - Respiratory failure\n4. Temperature:\n   - Severe hypothermia\n   - Cold intolerance\n   - Poor thermoregulation\n5. Metabolic:\n   - Hyponatremia\n   - Hypoglycemia\n   - Metabolic acidosis\n6. Treatment priorities:\n   - Thyroid replacement\n   - Supportive care\n   - Temperature management',
      images: [],
      relatedConcepts: [
        'Hypothyroidism',
        'Emergency management',
        'Temperature regulation',
        'Airway protection',
        'Hormone replacement'
      ]
    }
  },
  {
    id: generateId('Endocrine', 5),
    category: 'Endocrine',
    question: 'What are the signs of adrenal crisis?',
    answer: 'Severe hypotension, weakness, vomiting, abdominal pain, and electrolyte imbalances.',
    explanation: {
      detailed: 'Adrenal crisis is a life-threatening emergency:\n\n1. Hemodynamic changes:\n   - Severe hypotension\n   - Shock\n   - Poor perfusion\n2. Gastrointestinal:\n   - Severe nausea/vomiting\n   - Abdominal pain\n   - Diarrhea\n3. Metabolic derangements:\n   - Hyponatremia\n   - Hyperkalemia\n   - Hypoglycemia\n4. Clinical symptoms:\n   - Extreme weakness\n   - Fatigue\n   - Mental status changes\n5. Contributing factors:\n   - Stress\n   - Infection\n   - Medication changes\n6. Treatment priorities:\n   - Steroid replacement\n   - Fluid resuscitation\n   - Electrolyte correction',
      images: [],
      relatedConcepts: [
        'Steroid therapy',
        'Fluid management',
        'Electrolyte balance',
        'Stress response',
        'Emergency care'
      ]
    }
  },
  {
    id: generateId('Endocrine', 6),
    category: 'Endocrine',
    question: 'What are the nursing considerations for managing hypoglycemia?',
    answer: 'Rapid glucose administration, level of consciousness monitoring, frequent BG checks, identify cause.',
    explanation: {
      detailed: 'Hypoglycemia management requires prompt intervention:\n\n1. Initial response:\n   - Glucose administration\n   - Level of consciousness\n   - Vital signs\n2. Assessment:\n   - Blood glucose monitoring\n   - Mental status\n   - Symptoms resolution\n3. Treatment options:\n   - Oral glucose\n   - IV dextrose\n   - Glucagon\n4. Prevention strategies:\n   - Regular meals\n   - Medication review\n   - Activity planning\n5. Documentation:\n   - Blood glucose values\n   - Interventions\n   - Patient response\n6. Patient education:\n   - Warning signs\n   - Prevention strategies\n   - Emergency management',
      images: [],
      relatedConcepts: [
        'Glucose management',
        'Emergency response',
        'Patient education',
        'Medication safety',
        'Documentation'
      ]
    }
  },
  {
    id: generateId('Endocrine', 7),
    category: 'Endocrine',
    question: 'What are the signs of SIADH?',
    answer: 'Hyponatremia, concentrated urine, mental status changes, and seizures.',
    explanation: {
      detailed: 'SIADH presents with characteristic findings:\n\n1. Laboratory values:\n   - Severe hyponatremia\n   - Concentrated urine\n   - Low serum osmolality\n2. Neurological signs:\n   - Mental status changes\n   - Seizures\n   - Headache\n3. Physical symptoms:\n   - Nausea\n   - Muscle cramps\n   - Weakness\n4. Risk factors:\n   - CNS disorders\n   - Pulmonary disease\n   - Medications\n5. Monitoring needs:\n   - Sodium levels\n   - Fluid balance\n   - Neurological status\n6. Treatment approach:\n   - Fluid restriction\n   - Sodium correction\n   - Underlying cause',
      images: [],
      relatedConcepts: [
        'Fluid management',
        'Electrolyte balance',
        'Neurological assessment',
        'Medication review',
        'Treatment planning'
      ]
    }
  },
  {
    id: generateId('Endocrine', 8),
    category: 'Endocrine',
    question: 'What are the signs of Cushing syndrome?',
    answer: 'Central obesity, moon face, buffalo hump, skin changes, and muscle weakness.',
    explanation: {
      detailed: 'Cushing syndrome has distinctive features:\n\n1. Physical changes:\n   - Central obesity\n   - Moon face\n   - Buffalo hump\n2. Skin changes:\n   - Purple striae\n   - Easy bruising\n   - Poor healing\n3. Musculoskeletal:\n   - Proximal weakness\n   - Osteoporosis\n   - Fracture risk\n4. Metabolic effects:\n   - Hyperglycemia\n   - Hypertension\n   - Electrolyte changes\n5. Psychological:\n   - Mood changes\n   - Depression\n   - Anxiety\n6. Complications:\n   - Infections\n   - Cardiovascular disease\n   - Diabetes',
      images: [],
      relatedConcepts: [
        'Steroid excess',
        'Metabolic changes',
        'Physical assessment',
        'Complication prevention',
        'Long-term management'
      ]
    }
  },
  {
    id: generateId('Endocrine', 9),
    category: 'Endocrine',
    question: 'What are the nursing considerations for thyroid storm prevention?',
    answer: 'Monitor thyroid levels, identify triggers, medication compliance, vital sign monitoring.',
    explanation: {
      detailed: 'Thyroid storm prevention requires vigilance:\n\n1. Monitoring:\n   - Thyroid levels\n   - Vital signs\n   - Symptoms\n2. Medication management:\n   - Antithyroid drugs\n   - Beta blockers\n   - Compliance\n3. Trigger avoidance:\n   - Stress reduction\n   - Infection prevention\n   - Medication review\n4. Assessment:\n   - Cardiovascular status\n   - Mental status\n   - Temperature\n5. Patient education:\n   - Warning signs\n   - Medication importance\n   - Follow-up care\n6. Documentation:\n   - Assessment findings\n   - Interventions\n   - Response to treatment',
      images: [],
      relatedConcepts: [
        'Thyroid management',
        'Medication compliance',
        'Risk assessment',
        'Patient education',
        'Prevention strategies'
      ]
    }
  },
  {
    id: generateId('Endocrine', 10),
    category: 'Endocrine',
    question: 'What are the signs of diabetic hyperosmolar syndrome?',
    answer: 'Severe hyperglycemia, extreme thirst, confusion, and no ketosis.',
    explanation: {
      detailed: 'Hyperosmolar syndrome has distinct features:\n\n1. Laboratory findings:\n   - Glucose >600 mg/dL\n   - High osmolality\n   - No significant ketones\n2. Clinical presentation:\n   - Severe dehydration\n   - Altered mental status\n   - Extreme thirst\n3. Vital signs:\n   - Hypotension\n   - Tachycardia\n   - Temperature changes\n4. Neurological:\n   - Confusion\n   - Lethargy\n   - Seizures\n5. Risk factors:\n   - Elderly\n   - Type 2 diabetes\n   - Poor fluid intake\n6. Treatment priorities:\n   - Fluid replacement\n   - Glucose control\n   - Electrolyte management',
      images: [],
      relatedConcepts: [
        'Diabetes complications',
        'Fluid management',
        'Glucose control',
        'Elderly care',
        'Emergency management'
      ]
    }
  },

  // Multi System (50 cards)
  {
    id: generateId('Multi System', 0),
    category: 'Multi System',
    question: 'What are the diagnostic criteria for sepsis?',
    answer: 'Suspected infection plus SOFA score ≥2 points or qSOFA ≥2 points (altered mental status, RR ≥22, SBP ≤100).',
    explanation: {
      detailed: 'Sepsis diagnosis is based on specific criteria:\n\n1. Suspected infection plus:\n   - SOFA score ≥2 points OR\n   - qSOFA ≥2 points\n2. qSOFA criteria:\n   - Altered mental status\n   - Respiratory rate ≥22\n   - Systolic BP ≤100\n3. SOFA score components:\n   - Respiratory (PaO2/FiO2)\n   - Coagulation (platelets)\n   - Liver (bilirubin)\n   - Cardiovascular (MAP/vasopressors)\n   - CNS (Glasgow Coma Scale)\n   - Renal (creatinine/urine output)',
      images: [],
      relatedConcepts: [
        'SOFA scoring',
        'qSOFA criteria',
        'Early recognition',
        'Organ dysfunction',
        'Hemodynamic monitoring'
      ]
    }
  },
  {
    id: generateId('Multi System', 1),
    category: 'Multi System',
    question: 'What are the signs of septic shock?',
    answer: 'Hypotension, tachycardia, fever/hypothermia, altered mental status, decreased urine output.',
    explanation: {
      detailed: 'Septic shock presents with multiple system involvement:\n\n1. Cardiovascular:\n   - Hypotension despite fluids\n   - Tachycardia\n   - Poor perfusion\n2. Temperature:\n   - Fever >38.3°C\n   - Or hypothermia <36°C\n   - Rigors\n3. Neurological:\n   - Altered mental status\n   - Confusion\n   - Lethargy\n4. Renal:\n   - Decreased urine output\n   - Acute kidney injury\n   - Electrolyte imbalances\n5. Respiratory:\n   - Tachypnea\n   - Hypoxemia\n   - ARDS\n6. Laboratory findings:\n   - Elevated lactate\n   - Organ dysfunction\n   - Coagulopathy',
      images: [],
      relatedConcepts: [
        'Early goal-directed therapy',
        'Fluid resuscitation',
        'Vasopressor support',
        'Antibiotic therapy',
        'Organ support'
      ]
    }
  },
  {
    id: generateId('Multi System', 2),
    category: 'Multi System',
    question: 'What are the signs of anaphylactic shock?',
    answer: 'Acute onset, urticaria, bronchospasm, angioedema, hypotension.',
    explanation: {
      detailed: 'Anaphylactic shock has rapid onset with multiple symptoms:\n\n1. Skin/Mucosa:\n   - Urticaria\n   - Angioedema\n   - Flushing\n2. Respiratory:\n   - Bronchospasm\n   - Stridor\n   - Upper airway swelling\n3. Cardiovascular:\n   - Hypotension\n   - Tachycardia\n   - Shock\n4. Gastrointestinal:\n   - Nausea/vomiting\n   - Abdominal pain\n   - Diarrhea\n5. Neurological:\n   - Anxiety\n   - Dizziness\n   - Confusion\n6. Treatment priorities:\n   - Epinephrine\n   - Airway management\n   - Fluid resuscitation',
      images: [],
      relatedConcepts: [
        'Allergic reaction',
        'Emergency response',
        'Airway management',
        'Medication therapy',
        'Patient monitoring'
      ]
    }
  },
  {
    id: generateId('Multi System', 3),
    category: 'Multi System',
    question: 'What are the signs of malignant hyperthermia?',
    answer: 'Rapid temperature elevation, muscle rigidity, tachycardia, acidosis, hyperkalemia.',
    explanation: {
      detailed: 'Malignant hyperthermia presents with rapid onset:\n\n1. Temperature changes:\n   - Rapid elevation\n   - Often >40°C\n   - Poor response to cooling\n2. Muscular signs:\n   - Rigidity\n   - Masseter spasm\n   - Rhabdomyolysis\n3. Metabolic changes:\n   - Severe acidosis\n   - Hyperkalemia\n   - Elevated CK\n4. Cardiovascular:\n   - Tachycardia\n   - Arrhythmias\n   - Unstable BP\n5. Other signs:\n   - Dark urine\n   - Cyanosis\n   - Mixed venous desaturation\n6. Emergency management:\n   - Dantrolene\n   - Active cooling\n   - Supportive care',
      images: [],
      relatedConcepts: [
        'Anesthetic complications',
        'Temperature management',
        'Muscle disorders',
        'Emergency response',
        'Critical care'
      ]
    }
  },
  {
    id: generateId('Multi System', 4),
    category: 'Multi System',
    question: 'What are the signs of neuroleptic malignant syndrome?',
    answer: 'Hyperthermia, muscle rigidity, altered mental status, autonomic instability.',
    explanation: {
      detailed: 'NMS presents with characteristic features:\n\n1. Temperature:\n   - Hyperthermia\n   - Often >38.5°C\n   - Poor response to antipyretics\n2. Muscular:\n   - Lead-pipe rigidity\n   - Tremors\n   - Elevated CPK\n3. Mental status:\n   - Altered consciousness\n   - Agitation\n   - Coma\n4. Autonomic changes:\n   - BP fluctuations\n   - Tachycardia\n   - Diaphoresis\n5. Laboratory findings:\n   - Elevated CK\n   - Leukocytosis\n   - Metabolic acidosis\n6. Treatment approach:\n   - Medication discontinuation\n   - Supportive care\n   - Specific medications',
      images: [],
      relatedConcepts: [
        'Antipsychotic complications',
        'Temperature regulation',
        'Autonomic dysfunction',
        'Emergency management',
        'Medication safety'
      ]
    }
  },
  {
    id: generateId('Multi System', 5),
    category: 'Multi System',
    question: 'What are the signs of serotonin syndrome?',
    answer: 'Hyperthermia, agitation, myoclonus, hyperreflexia, autonomic instability.',
    explanation: {
      detailed: 'Serotonin syndrome has a characteristic triad:\n\n1. Mental status:\n   - Agitation\n   - Confusion\n   - Coma\n2. Neuromuscular:\n   - Myoclonus\n   - Hyperreflexia\n   - Tremor\n3. Autonomic:\n   - Hyperthermia\n   - Tachycardia\n   - Diaphoresis\n4. Additional signs:\n   - Diarrhea\n   - Ocular clonus\n   - Muscle rigidity\n5. Risk factors:\n   - Multiple serotonergic drugs\n   - Dose increases\n   - Drug interactions\n6. Treatment priorities:\n   - Drug discontinuation\n   - Supportive care\n   - Specific antagonists',
      images: [],
      relatedConcepts: [
        'Medication interactions',
        'Neurotoxicity',
        'Emergency management',
        'Drug safety',
        'Critical care'
      ]
    }
  },
  {
    id: generateId('Multi System', 6),
    category: 'Multi System',
    question: 'What are the signs of DIC?',
    answer: 'Bleeding, thrombosis, prolonged coagulation times, thrombocytopenia, elevated D-dimer.',
    explanation: {
      detailed: 'DIC presents with complex coagulation abnormalities:\n\n1. Bleeding manifestations:\n   - Multiple sites\n   - Mucosal bleeding\n   - IV site oozing\n2. Thrombotic events:\n   - Organ dysfunction\n   - Skin necrosis\n   - Vessel occlusion\n3. Laboratory findings:\n   - Prolonged PT/PTT\n   - Thrombocytopenia\n   - Elevated D-dimer\n4. Organ involvement:\n   - Renal failure\n   - Respiratory failure\n   - Liver dysfunction\n5. Contributing factors:\n   - Sepsis\n   - Trauma\n   - Malignancy\n6. Treatment approach:\n   - Treat underlying cause\n   - Blood product support\n   - Anticoagulation if needed',
      images: [],
      relatedConcepts: [
        'Coagulation disorders',
        'Blood product therapy',
        'Organ dysfunction',
        'Critical care',
        'Hemostasis management'
      ]
    }
  },
  {
    id: generateId('Multi System', 7),
    category: 'Multi System',
    question: 'What are the signs of tumor lysis syndrome?',
    answer: 'Hyperkalemia, hyperphosphatemia, hypocalcemia, hyperuricemia, acute kidney injury.',
    explanation: {
      detailed: 'Tumor lysis syndrome involves metabolic derangements:\n\n1. Electrolyte abnormalities:\n   - Hyperkalemia\n   - Hyperphosphatemia\n   - Hypocalcemia\n2. Metabolic changes:\n   - Hyperuricemia\n   - Metabolic acidosis\n   - Acute kidney injury\n3. Clinical manifestations:\n   - Cardiac arrhythmias\n   - Seizures\n   - Muscle cramps\n4. Risk factors:\n   - Large tumor burden\n   - Chemotherapy initiation\n   - Renal dysfunction\n5. Prevention strategies:\n   - Hydration\n   - Allopurinol\n   - Monitoring\n6. Treatment priorities:\n   - Fluid management\n   - Electrolyte correction\n   - Renal support',
      images: [],
      relatedConcepts: [
        'Cancer complications',
        'Electrolyte management',
        'Renal protection',
        'Prevention strategies',
        'Critical care'
      ]
    }
  },
  {
    id: generateId('Multi System', 8),
    category: 'Multi System',
    question: 'What are the signs of rhabdomyolysis?',
    answer: 'Muscle pain, weakness, dark urine, elevated CK, hyperkalemia, acute kidney injury.',
    explanation: {
      detailed: 'Rhabdomyolysis presents with characteristic features:\n\n1. Muscle symptoms:\n   - Severe pain\n   - Weakness\n   - Swelling\n2. Urine changes:\n   - Dark/tea-colored\n   - Decreased output\n   - Myoglobinuria\n3. Laboratory findings:\n   - Elevated CK\n   - Hyperkalemia\n   - Elevated creatinine\n4. Complications:\n   - Acute kidney injury\n   - Compartment syndrome\n   - DIC\n5. Risk factors:\n   - Trauma\n   - Extreme exercise\n   - Medications\n6. Treatment priorities:\n   - Aggressive hydration\n   - Electrolyte management\n   - Monitoring complications',
      images: [],
      relatedConcepts: [
        'Muscle injury',
        'Renal protection',
        'Fluid management',
        'Compartment syndrome',
        'Critical care'
      ]
    }
  },
  {
    id: generateId('Multi System', 9),
    category: 'Multi System',
    question: 'What are the signs of acute liver failure?',
    answer: 'Jaundice, coagulopathy, encephalopathy, elevated transaminases, hypoglycemia.',
    explanation: {
      detailed: 'Acute liver failure affects multiple systems:\n\n1. Hepatic signs:\n   - Jaundice\n   - RUQ pain\n   - Hepatomegaly\n2. Neurological:\n   - Encephalopathy\n   - Cerebral edema\n   - Seizures\n3. Coagulation:\n   - Elevated INR\n   - Bleeding risk\n   - Thrombocytopenia\n4. Metabolic:\n   - Hypoglycemia\n   - Acidosis\n   - Electrolyte imbalances\n5. Other systems:\n   - Renal failure\n   - Respiratory failure\n   - Cardiovascular instability\n6. Treatment priorities:\n   - N-acetylcysteine\n   - Supportive care\n   - Transplant evaluation',
      images: [],
      relatedConcepts: [
        'Hepatic failure',
        'Multi-organ failure',
        'Transplant care',
        'Critical care',
        'Organ support'
      ]
    }
  },
  {
    id: generateId('Multi System', 10),
    category: 'Multi System',
    question: 'What are the signs of acute pancreatitis?',
    answer: 'Severe abdominal pain, elevated lipase/amylase, SIRS response, organ dysfunction.',
    explanation: {
      detailed: 'Acute pancreatitis presents with systemic involvement:\n\n1. Abdominal signs:\n   - Severe epigastric pain\n   - Nausea/vomiting\n   - Distention\n2. Laboratory findings:\n   - Elevated lipase/amylase\n   - Elevated inflammatory markers\n   - Metabolic derangements\n3. Systemic response:\n   - SIRS criteria\n   - Organ dysfunction\n   - Shock\n4. Complications:\n   - Necrosis\n   - Fluid collections\n   - Organ failure\n5. Risk assessment:\n   - APACHE II score\n   - Organ failure\n   - Local complications\n6. Treatment priorities:\n   - Fluid resuscitation\n   - Pain management\n   - Nutrition support',
      images: [],
      relatedConcepts: [
        'Inflammatory response',
        'Fluid management',
        'Nutrition support',
        'Pain control',
        'Critical care'
      ]
    }
  },

  // Neurological (50 cards)
  {
    id: generateId('Neurological', 0),
    category: 'Neurological',
    question: 'What are the components of the Glasgow Coma Scale?',
    answer: 'Eye opening (4), verbal response (5), and motor response (6), with total score ranging from 3-15.',
    explanation: {
      detailed: 'The Glasgow Coma Scale (GCS) assesses consciousness level:\n\n1. Eye Opening (4 points):\n   - Spontaneous: 4\n   - To verbal command: 3\n   - To pain: 2\n   - None: 1\n2. Verbal Response (5 points):\n   - Oriented: 5\n   - Confused: 4\n   - Inappropriate words: 3\n   - Incomprehensible sounds: 2\n   - None: 1\n3. Motor Response (6 points):\n   - Obeys commands: 6\n   - Localizes pain: 5\n   - Withdrawal from pain: 4\n   - Flexion to pain: 3\n   - Extension to pain: 2\n   - None: 1',
      images: [
        {
          url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/Glasgow_Coma_Scale_Assessment.png/800px-Glasgow_Coma_Scale_Assessment.png',
          caption: 'Glasgow Coma Scale Assessment Aid',
          alt: 'Detailed diagram showing how to assess and score the Glasgow Coma Scale components'
        }
      ],
      relatedConcepts: [
        'Neurological assessment',
        'Consciousness level',
        'Brain injury',
        'Trauma assessment',
        'Critical care monitoring'
      ]
    }
  },
  {
    id: generateId('Neurological', 1),
    category: 'Neurological',
    question: 'What are the signs of increased intracranial pressure?',
    answer: 'Cushing\'s triad (hypertension, bradycardia, irregular breathing), decreased LOC, pupillary changes.',
    explanation: {
      detailed: 'Increased ICP presents with characteristic signs:\n\n1. Cushing\'s triad:\n   - Hypertension\n   - Bradycardia\n   - Irregular breathing\n2. Neurological changes:\n   - Decreased LOC\n   - Pupillary abnormalities\n   - Posturing\n3. Symptoms:\n   - Headache\n   - Nausea/vomiting\n   - Visual changes\n4. Late signs:\n   - Herniation\n   - Coma\n   - Respiratory arrest\n5. Monitoring needs:\n   - ICP values\n   - CPP maintenance\n   - Neurological checks\n6. Treatment priorities:\n   - Head elevation\n   - Osmotic therapy\n   - Ventilation management',
      images: [],
      relatedConcepts: [
        'Cerebral perfusion',
        'Neurological assessment',
        'Emergency management',
        'Brain injury',
        'Critical care'
      ]
    }
  },
  {
    id: generateId('Neurological', 2),
    category: 'Neurological',
    question: 'What are the signs of acute stroke?',
    answer: 'FAST: Facial droop, Arm weakness, Speech difficulty, Time to call emergency.',
    explanation: {
      detailed: 'Acute stroke presents with sudden onset:\n\n1. FAST assessment:\n   - Facial asymmetry\n   - Arm drift\n   - Speech changes\n   - Time critical\n2. Additional signs:\n   - Vision changes\n   - Balance problems\n   - Severe headache\n3. Neurological deficits:\n   - Hemiparesis\n   - Aphasia\n   - Sensory loss\n4. Assessment needs:\n   - NIH stroke scale\n   - CT/MRI imaging\n   - Labs\n5. Time windows:\n   - Last known well\n   - tPA eligibility\n   - Intervention options\n6. Initial management:\n   - ABC assessment\n   - BP control\n   - Glucose management',
      images: [],
      relatedConcepts: [
        'Stroke assessment',
        'Time windows',
        'Emergency response',
        'Neurological deficits',
        'Treatment options'
      ]
    }
  },
  {
    id: generateId('Neurological', 3),
    category: 'Neurological',
    question: 'What are the signs of status epilepticus?',
    answer: 'Continuous seizure activity >5 minutes or recurrent seizures without recovery.',
    explanation: {
      detailed: 'Status epilepticus is a neurological emergency:\n\n1. Clinical presentation:\n   - Prolonged seizure\n   - Multiple seizures\n   - No recovery between\n2. Time considerations:\n   - >5 minutes continuous\n   - Two or more sequential\n   - Impaired consciousness\n3. Complications:\n   - Respiratory compromise\n   - Metabolic acidosis\n   - Hyperthermia\n4. Monitoring needs:\n   - Continuous EEG\n   - Vital signs\n   - Oxygenation\n5. Treatment priorities:\n   - Airway protection\n   - Anti-epileptic drugs\n   - Support measures\n6. Prevention strategies:\n   - Medication compliance\n   - Trigger avoidance\n   - Regular monitoring',
      images: [],
      relatedConcepts: [
        'Seizure management',
        'Emergency response',
        'Medication therapy',
        'Airway protection',
        'Neurological monitoring'
      ]
    }
  },
  {
    id: generateId('Neurological', 4),
    category: 'Neurological',
    question: 'What are the signs of spinal cord injury?',
    answer: 'Motor/sensory loss, autonomic dysfunction, priapism, neurogenic shock.',
    explanation: {
      detailed: 'Spinal cord injury presents with multiple signs:\n\n1. Neurological deficits:\n   - Motor loss\n   - Sensory changes\n   - Reflex changes\n2. Autonomic effects:\n   - Neurogenic shock\n   - Temperature dysregulation\n   - Bowel/bladder changes\n3. Level-specific findings:\n   - Quadriplegia\n   - Paraplegia\n   - Breathing difficulty\n4. Associated signs:\n   - Priapism\n   - Hypotension\n   - Bradycardia\n5. Assessment needs:\n   - ASIA scale\n   - Neurological level\n   - Imaging studies\n6. Initial management:\n   - Immobilization\n   - Hemodynamic support\n   - Methylprednisolone',
      images: [],
      relatedConcepts: [
        'Neurological assessment',
        'Spinal precautions',
        'Autonomic dysfunction',
        'Emergency care',
        'Rehabilitation'
      ]
    }
  },
  {
    id: generateId('Neurological', 5),
    category: 'Neurological',
    question: 'What are the signs of brain death?',
    answer: 'Absent brainstem reflexes, no spontaneous breathing, unresponsive to stimuli.',
    explanation: {
      detailed: 'Brain death determination requires:\n\n1. Prerequisites:\n   - Known cause\n   - No confounders\n   - Normal temperature\n2. Clinical examination:\n   - Coma\n   - Absent reflexes\n   - Apnea test\n3. Brainstem reflexes:\n   - Pupillary\n   - Corneal\n   - Vestibulo-ocular\n4. Additional testing:\n   - Apnea testing\n   - Ancillary studies\n   - Documentation\n5. Legal considerations:\n   - Time of death\n   - Documentation\n   - Family support\n6. Organ donation:\n   - Early referral\n   - Maintenance\n   - Family discussion',
      images: [],
      relatedConcepts: [
        'Death determination',
        'Organ donation',
        'Family support',
        'Legal requirements',
        'Documentation'
      ]
    }
  },
  {
    id: generateId('Neurological', 6),
    category: 'Neurological',
    question: 'What are the signs of Guillain-Barré syndrome?',
    answer: 'Ascending paralysis, areflexia, respiratory compromise, autonomic dysfunction.',
    explanation: {
      detailed: 'Guillain-Barré syndrome progresses characteristically:\n\n1. Initial presentation:\n   - Ascending weakness\n   - Paresthesias\n   - Areflexia\n2. Progression:\n   - Symmetric paralysis\n   - Respiratory failure\n   - Autonomic changes\n3. Respiratory concerns:\n   - Vital capacity\n   - NIF/FVC\n   - Ventilation needs\n4. Autonomic dysfunction:\n   - BP fluctuations\n   - Arrhythmias\n   - Temperature changes\n5. Monitoring needs:\n   - Respiratory function\n   - Swallowing\n   - Progression rate\n6. Treatment options:\n   - IVIG/plasmapheresis\n   - Supportive care\n   - Rehabilitation',
      images: [],
      relatedConcepts: [
        'Autoimmune disorders',
        'Respiratory monitoring',
        'Paralysis management',
        'Critical care',
        'Rehabilitation'
      ]
    }
  },
  {
    id: generateId('Neurological', 7),
    category: 'Neurological',
    question: 'What are the signs of myasthenic crisis?',
    answer: 'Severe muscle weakness, respiratory failure, bulbar dysfunction, fatigue.',
    explanation: {
      detailed: 'Myasthenic crisis requires close monitoring:\n\n1. Respiratory function:\n   - Decreased vital capacity\n   - Weak cough\n   - CO2 retention\n2. Bulbar symptoms:\n   - Dysphagia\n   - Dysarthria\n   - Aspiration risk\n3. Muscle weakness:\n   - Generalized\n   - Fatigue\n   - Ocular symptoms\n4. Precipitating factors:\n   - Infection\n   - Stress\n   - Medication changes\n5. Assessment needs:\n   - Respiratory parameters\n   - Swallowing\n   - Muscle strength\n6. Treatment approach:\n   - IVIG/plasmapheresis\n   - Ventilatory support\n   - Medication adjustment',
      images: [],
      relatedConcepts: [
        'Neuromuscular disease',
        'Respiratory support',
        'Crisis management',
        'Medication therapy',
        'Critical care'
      ]
    }
  },
  {
    id: generateId('Neurological', 8),
    category: 'Neurological',
    question: 'What are the signs of meningitis?',
    answer: 'Fever, neck stiffness, headache, photophobia, altered mental status.',
    explanation: {
      detailed: 'Meningitis presents with classic signs:\n\n1. Classic triad:\n   - Fever\n   - Neck stiffness\n   - Altered mental status\n2. Associated symptoms:\n   - Severe headache\n   - Photophobia\n   - Nausea/vomiting\n3. Physical findings:\n   - Kernig\'s sign\n   - Brudzinski\'s sign\n   - Rash (if present)\n4. Risk factors:\n   - Age\n   - Immunosuppression\n   - Recent exposure\n5. Diagnostic needs:\n   - LP results\n   - Blood cultures\n   - Imaging\n6. Treatment priorities:\n   - Antibiotics\n   - Supportive care\n   - Isolation',
      images: [],
      relatedConcepts: [
        'CNS infection',
        'Neurological assessment',
        'Antibiotic therapy',
        'Infection control',
        'Critical care'
      ]
    }
  },
  {
    id: generateId('Neurological', 9),
    category: 'Neurological',
    question: 'What are the signs of alcohol withdrawal?',
    answer: 'Tremors, anxiety, tachycardia, hypertension, seizures, delirium tremens.',
    explanation: {
      detailed: 'Alcohol withdrawal progresses in stages:\n\n1. Early signs:\n   - Tremors\n   - Anxiety\n   - Autonomic hyperactivity\n\n2. Intermediate phase:\n   - Seizures\n   - Hallucinations\n   - Agitation\n\n3. Late manifestations:\n   - Delirium tremens\n   - Severe autonomic changes\n   - Mental status changes\n\n4. Monitoring needs:\n   - CIWA score\n   - Vital signs\n   - Mental status\n\n5. Risk factors:\n   - Duration of use\n   - Previous withdrawals\n   - Comorbidities\n\n6. Treatment approach:\n   - Benzodiazepines\n   - Supportive care\n   - Prevention of complications',
      images: [],
      relatedConcepts: [
        'Withdrawal management',
        'CIWA protocol',
        'Seizure prevention',
        'Medication therapy',
        'Safety measures'
      ]
    }
  },
  {
    id: generateId('Neurological', 10),
    category: 'Neurological',
    question: 'What are the signs of subarachnoid hemorrhage?',
    answer: 'Thunderclap headache, neck stiffness, photophobia, altered consciousness.',
    explanation: {
      detailed: 'Subarachnoid hemorrhage presents acutely:\n\n1. Classic presentation:\n   - Sudden severe headache\n   - Neck stiffness\n   - Photophobia\n2. Associated symptoms:\n   - Nausea/vomiting\n   - Altered consciousness\n   - Focal deficits\n3. Risk factors:\n   - Hypertension\n   - Aneurysms\n   - Smoking\n4. Grading scales:\n   - Hunt and Hess\n   - Fisher scale\n   - World Federation\n5. Complications:\n   - Vasospasm\n   - Hydrocephalus\n   - Rebleeding\n6. Treatment priorities:\n   - Blood pressure control\n   - Nimodipine\n   - Surgical intervention',
      images: [],
      relatedConcepts: [
        'Neurological emergency',
        'Aneurysm management',
        'Vasospasm prevention',
        'Critical care',
        'Neurosurgery'
      ]
    }
  }
]; 