import React, {useState} from 'react'
import {Input, Button, Form, FormGroup, Card, CardHeader, CardBody} from 'reactstrap'
import './styles.css'

function Converter ({moedaA, moedaB}){

    
    const [moedaAValue, setMoedaAValue] = useState('')
    const [moedaBValue, setMoedaBValue] = useState(0)

    function handleConverter(e){        

        e.preventDefault()

        let de_para = `${moedaA}_${moedaB}`

        let url = `https://free.currconv.com/api/v7/convert?q=${de_para}&compact=ultra&apiKey=922c4f66441fc2173ed0`

        fetch(url)
            .then(resp => {
                return resp.json()
            })
            .then(json => {
                let cotacao = json[de_para]
                let value = (parseFloat(moedaAValue) * cotacao).toFixed(2)
                return setMoedaBValue(value)
            })
    }

    return(
        <Card className="converter justify-content-center bg-white rounded center">
            <CardHeader className="bg-warning mb-3 px-5">
                <h2 className="text-center text-white" >{moedaA} para {moedaB}</h2>
            </CardHeader>
            <CardBody className="px-5">
                <Form className="container" onSubmit={handleConverter}>
                    <FormGroup className="row">
                        <Input type="number" className="col-12" placeholder="Value" onChange={e => setMoedaAValue(e.target.value)}></Input>
                    </FormGroup>
                    <FormGroup className="row">
                        <Button className="col-12 bg-primary" type="submit">Converter</Button>
                    </FormGroup>
                </Form>
                <h2 className="text-center">{moedaBValue} {moedaB}</h2>
            </CardBody>
        </Card>
    )
}

export default Converter