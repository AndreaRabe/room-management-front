import { Header } from "../../components/header/header"
import SinInImg from '../../assets/images/signIn.png';
import './singIn.css'
import { useEffect, useState } from "react";
import axios from 'axios';
import { useNavigate } from "react-router";



const departement = ["Informatique", "Ressources Humaines", "Patrimoine"]

export function SingIn(){
    return(
        <div className="pg-singin">
            <header>
                <Header header={"none"}/>
            </header>
            <div className="pg-singin-body">
                <div className="pg-singin-txt-img">
                    <span>Nous sommes ravis de vous accueillir !</span>
                    <img src={SinInImg} alt="Conference table" />
                </div>
                <SingInForm />
            </div>
        </div>
    )
}

function SingInForm(){
    const [isAdmin, setIsAdmin] = useState(false)
    const navigate = useNavigate()

    function handleTabClick(){
        setIsAdmin(!isAdmin)
    }
    return(
        <div className="form-singin">
            <div className="form-singin-div-1">
                <span className="form-singin-span">Créer un compte</span>
                <div className="form-singin-div-1-checkbox">
                    <span style={{ marginRight: '100px' }} className={!isAdmin ? 'active': ''} onClick={handleTabClick}>Client</span>
                    <span style={{ marginLeft: '100px' }} className={isAdmin ? 'active': ''} onClick={handleTabClick}>Administrateur</span>
                </div>
                {!isAdmin ? <SingInFormClient /> : <SingInFormAdmin/>}
                <div className="form-singin-div-3">
                    Vous avez déjà un compte ?<b className="form-singin-div-3-b" onClick={() => navigate('/singUp')}>Se connecter</b>
                </div>
            </div>
        </div>
    )
}

function SingInFormClient(){
    const [formData, setFormData] = useState({
        email: '',
        name: '',
        first_name: '',
        tel: '',
        is_admin:false,
        password: '',
        company: '',
        id_department: 0,
      });

      const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormData({
          ...formData,
          [name]: value,
        });
      };
      
      const [departments, setDepartments] = useState([]);
      
      const handleDepartmentChange = (event) => {
        const selectedDepartmentId = parseInt(event.target.value);
        setFormData({
          ...formData,
          id_department: selectedDepartmentId,
        });
      };


      useEffect(() => {
        // Charger les départements depuis le back-end ici
        axios.get('/department/get/')
          .then((response) => {
            setDepartments(response.data);
          })
          .catch((error) => {
            console.error('Error fetching departments:', error.message);
          });
      }, []);   

      
      const handleSubmit = async (e) => {
        e.preventDefault();
    
        try {
          const response = await axios.post('/user/new', formData, {
            headers: {
              'Content-Type': 'application/json',
            },
          });
    
          if (response.status === 201) {
            window.location.href = '/singUp';
            console.log('User created successfully!');
          } else {
            console.error('Failed to create user:', response.statusText);
          }
        } catch (error) {
          console.error('Error:', error.message);
        }
      };
    return(
        <div>
                <form className="formClient-singin-div-2" onSubmit={handleSubmit}>

                    <div className="formClient-singin-div-4">

                        <div className="formClient-singin-input-group">
                        <input
                            type="text"
                            placeholder="Email"
                            className="formClient-singin-input"
                            name="email"
                            value={formData.email}
                            onChange={handleInputChange}
                        />
                        <input 
                            type="text"
                            placeholder="Nom"
                            className="formClient-singin-input"
                            name="name"
                            value={formData.name}
                            onChange={handleInputChange}
                        />
                        </div>


                        <div className="formClient-singin-input-group">
                        <input 
                             type="text"
                             placeholder="Prénom"
                             className="formClient-singin-input"
                             name="first_name"
                             value={formData.first_name}
                             onChange={handleInputChange}
                        />
                            <input
                                type="text"
                                placeholder="Tel +261"
                                className="formClient-singin-input"
                                name="tel"
                                value={formData.tel}
                                onChange={handleInputChange}
                            />
                        </div>

                        <div className="formClient-singin-input-group">
                            <input
                            type="password"
                            placeholder="Mot de passe"
                            className="formClient-singin-input"
                            name="password"
                            value={formData.password}
                            onChange={handleInputChange}
                            />
                        <input
                            type="password"
                            placeholder="Confirmer mot de passe"
                            className="formClient-singin-input"
                        />
                        </div>


                        <div className="formClient-singin-input-group">
                        <input
                            type="text"
                            placeholder="Entreprise"
                            className="formClient-singin-input"
                            name="company"
                            value={formData.company}
                            onChange={handleInputChange}
                        />

                        <select
                              id="department"
                              name="department"
                              className="formClient-singin-dropdown"
                              onChange={handleDepartmentChange}
                              value={formData.id_department}
                            >
                              <option value="" disabled selected>
                                Votre département
                              </option>
                              {departments.map((department, index) => (
                                <option value={index + 1 } key={index} >
                                  {department.department_name}
                                </option>
                              ))}
                          </select>
                        </div>                        

                        <button type="submit" className="formClient-singin-btn">Creer compte</button>
                    </div>
                </form>
        </div>
)
}

function SingInFormAdmin(){
    const [formData, setFormData] = useState({
      email: '',
      name: '',
      first_name: '',
      IM: '',
      function: '',
      is_admin: true,
      tel: '',
      password: '',
      id_department: 0,
    });
  
    const handleChange = (event) => {
      const { name, value } = event.target;
      setFormData({
        ...formData,
        [name]: value,
      });
    };


    const [departments, setDepartments] = useState([]);
      
    const handleDepartmentChange = (event) => {
      const selectedDepartmentId = parseInt(event.target.value);
      setFormData({
        ...formData,
        id_department: selectedDepartmentId,
      });
    };


    useEffect(() => {
      // Charger les départements depuis le back-end ici
      axios.get('/department/get/')
        .then((response) => {
          setDepartments(response.data);
        })
        .catch((error) => {
          console.error('Error fetching departments:', error.message);
        });
    }, []);   
  
  
    const handleSubmit = async (e) => {
      e.preventDefault();
  
      try {
        const response = await axios.post('/user/new', formData, {
          headers: {
            'Content-Type': 'application/json',
          },
        });
  
        if (response.status === 201) {
          window.location.href = '/singUp';
          console.log('User created successfully!');
        } else {
          console.error('Failed to create user:', response.statusText);
        }
      } catch (error) {
        console.error('Error:', error.message);
      }
    };

    return(
          <div>
            <form className="formAdmin-singin-div-2" onSubmit={handleSubmit}>
  
              <div className="formAdmin-singin-div-4">
  
                <div className="formAdmin-singin-input-group">
                <input
                  type="email"
                  placeholder="Email"
                  className="formAdmin-singin-input"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                />
                  <input
                    type="text"
                    placeholder="Nom"
                    className="formAdmin-singin-input"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                  />
                </div>
  
                <div className="formAdmin-singin-input-group">
                  <input
                    type="text"
                    placeholder="Prénom"
                    className="formAdmin-singin-input"
                    name="first_name"
                    value={formData.first_name}
                    onChange={handleChange}
                  />
                  <input
                    type="text"
                    placeholder="IM"
                    className="formAdmin-singin-input"
                    name="IM"
                    value={formData.IM}
                    onChange={handleChange}
                  />
                </div>
  
                <div className="formAdmin-singin-input-group">
                  <input
                    type="text"
                    placeholder="Fonction"
                    className="formAdmin-singin-input"
                    name="function"
                    value={formData.function}
                    onChange={handleChange}
                  />
                  <input
                    type="text"
                    placeholder="Tel +261"
                    className="formAdmin-singin-input"
                    name="tel"
                    value={formData.tel}
                    onChange={handleChange}
                  />
                </div>
                <div className="formAdmin-singin-input-group">
                  <input
                    type="password"
                    placeholder="Mot de passe"
                    className="formAdmin-singin-input"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                  />
                  <input
                    type="password"
                    placeholder="Confirmer mot de passe"
                    className="formAdmin-singin-input"
                  />
                </div>
  
                <div className="formAdmin-singin-input-group">
                <select
                    id="department"
                    name="department"
                    className="formClient-singin-dropdown"
                    onChange={handleDepartmentChange}
                    value={formData.id_department}
                  >
                    <option value="" disabled selected>
                      Votre département
                    </option>
                    {departments.map((department, index) => (
                      <option value={index + 1 } key={index} >
                        {department.department_name}
                      </option>
                    ))}
                </select>
                </div>
  
                <button type="submit" className="formClient-singin-btn">
                  Créer compte
                </button>
              </div>
            </form>
        </div>
    )
}