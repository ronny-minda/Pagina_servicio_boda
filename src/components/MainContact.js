
import { MainContacto } from './styledComponents/Styled';
import { Formik, Form, Field } from 'formik';

import contacto from '../img/contacto.jpg';


function Main() {

    return (
        <MainContacto>
            
            <section className="section_primero">
                <img src={ contacto } alt="contacto"></img>
                <div>
                    <h2>Contact us</h2>
                    <p>500 Terry Francois Street </p>
                    <p>San Francisco, CA 94158</p>
                    <br></br>
                    <br></br>
                    <p>Tel: 123-456-7890</p>
                    <p>Fax: 123-456-7890</p>
                </div>
            </section>

            <section className="section_segundo">
                

                <>
                    <Formik
                        initialValues={{
                            nombre: '',
                            email: '',
                            telefono: '',
                            mensaje: ''
                        }}
                        // validate={(valores) => {
                        //     let errores = {};

                        //     // ver los valores que digite el usuario


                        // }}
                        onSubmit={(valores, {resetForm}) => {
                            resetForm();
                            console.log('Formulario enviado');

                        }}
                    >
                        {( {errors} ) => (
                            <Form className="formulario">


                                <label>
                                    <span>Nombre</span>
                                    <Field 
                                    type="text" 
                                    name="nombre" 
                                    id="nombre" 
                                    placeholder="nombre" 
                                    autocomplete="name" 
                                    required="" 
                                    
                                    ></Field>

                                </label>

                                <label>
                                    <span>Email</span>
                                    <Field 
                                        type="email" 
                                        name="email" 
                                        id="email" 
                                        placeholder="email" 
                                        autocomplete="email" 
                                        required="" 

                                    ></Field>

                                </label>

                                <label>
                                    <span>Telefono</span>
                                    <Field 
                                    type="number" 
                                    name="telefono" 
                                    id="telefono" 
                                    placeholder="telefono" 
                                    autocomplete="tel" 
                                    required="" 

                                    ></Field>

                                </label>


                                <label className="textarea1">
                                    <span>Mensaje</span>
                                    <Field 
                                    className="textarea"
                                    id="mensaje" 
                                    name="mensaje" 
                                    placeholder="Escribe tu mensaje aquí..." 
                                    
                                    ></Field>
                                </label>

                                <button type="submit">Enviar</button>

                            </Form>
                        )}

                    </Formik>
                </>


                
                <div>
                    <h2>Imformacion</h2>
                    <p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magni facilis eum amet molestias, blanditiis sed, esse inventore cumque.
                    </p>
                </div>
            </section>

        </MainContacto>
    );
}

export default Main;