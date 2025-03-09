const express = require('express')

const app = express()

app.use(express.json())

app.get('/cds-services', (req, res)=> {
    // res.send('hello') with '/'
    res.json({
        services: [
            {
                hook: 'patient-view',
                id: '0001',
                description: 'greet the patient',
                prefetch: {
                    patient: "Patient/{{context.patientId}}",
                    conditions: "Condition?patient={{context.patientId}}&recorded-date=gt{{today() - 10 years}}"
                    // conditions: "Condition?patient={{context.patientId}}&recorded-date=gt{{today() - 10 years}}&some={{context.draftOrders.entry.ofType(Patient).first().name.given}}"

                    // conditions: "Condition?patient={{context.patientId}}"


                },
            }
        ]
    })
})

app.post('/cds-services/:id', (req, res)=> {
    console.log('id', req.params.id)
    console.log('body', req.body)

    const patient = req.body.prefetch.patient;
    const conditions = req.body.prefetch.conditions;

    const firstName = patient.name[0].given[0]
    const secondName = patient.name[0].family
    // your app logic goes here

    //cards logic
    res.json({
        cards:
        conditions.total === 0
        ? []
        : [
            {
                summary: `Hello ${firstName} ${secondName}, you have ${conditions.total} Conditions`,
                indicator: 'warning',
                source: {
                    label: 'MediMind Health Services'
                },
                links: [
                    {
                        label: 'MediMind Health App',
                        url: 'http://localhost:4434/launch',
                        type: 'absolute' //to start the app using cds hooks
                    },
                    {
                        label: 'MediMind Smart Health App',
                        url: 'http://localhost:4434/launch',
                        type: 'smart' //to start the app using smart app launch
                    }
                ]
            }
        ]
    })
})

app.listen(4433, () => console.log('started'))