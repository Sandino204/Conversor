import React, { useState } from 'react'
import { BrowserRouter, Router, Switch, Redirect, Route, useHistory } from 'react-router-dom'
import Converter from './components/Converter'
import {Form, FormGroup, Input, CardHeader, Card, CardBody, Button} from 'reactstrap'

function Routes(){

    
    function ConverterA ({match}){
        return(
            <div className="">
                <div className="container-fluid">
                    <div className="row page">
                    <div className="col-4 offset-4 justify-content-center">
                        <Converter moedaA={match.params.value1} moedaB={match.params.value2}>
                        
                        </Converter>      
                    </div>
                    </div>
                </div>
            </div>
        )
    }

    function Chose(){   
        
        const history = useHistory()

        function changeUrl(e){
            e.preventDefault()

            history.push(`converter/${value1}/${value2}`)

        }

        const [value1, setValue1] = useState('')
        const [value2, setValue2] = useState('')

        return(
            <div className="">
                <div className="container-fluid">
                    <div className="row page">
                        <div className="col-4 offset-4 justify-content-center">
                            <Card className="container center">
                                <CardHeader className="row bg-warning">
                                    <h2 className="text-center text-white mb-3 ">Escolha a Conversão</h2>
                                </CardHeader>
                                <CardBody className="row">
                                    <Form className="col-12 row m-0" onSubmit={changeUrl}>
                                        <Input type="select" name="money1" id="money1" onChange={e => setValue1(e.target.value)} className="col-12 mb-3">
                                            <option selected value="USD">USD</option>
                                            <option value="CAD">CAD</option>
                                            <option value="BRL">BRL</option>
                                            <option value="EUR">JPY</option>
                                            <option value="GBP">GBP</option>
                                            <option value="AUD">AUD</option>
                                            <option value="CHF">CHF</option>
                                            <option value="NZD">NZD</option>
                                        </Input>
                                        <Input type="select" name="money2" id="money2" onChange={e => setValue2(e.target.value)} className="col-12 mb-3">
                                            <option selected value="BRL">BRL</option>
                                            <option value="USD">USD</option>
                                            <option value="CAD">CAD</option>
                                            <option value="EUR">JPY</option>
                                            <option value="GBP">GBP</option>
                                            <option value="AUD">AUD</option>
                                            <option value="CHF">CHF</option>
                                            <option value="NZD">NZD</option>
                                        </Input>
                                        <Button className="col-12 bg-primary" type="submit">
                                            Converter
                                        </Button>
                                    </Form>
                                </CardBody>
                            </Card>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    return(
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Chose}></Route>
                <Route path="/converter/:value1/:value2" component={ConverterA}></Route>
                <Redirect to="/"></Redirect>
            </Switch>
        </BrowserRouter>
    )
}

export default Routes