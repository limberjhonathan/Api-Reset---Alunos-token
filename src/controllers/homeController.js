import Aluno from '../models/Aluno';

class HomeController {
  index(req, res) {
    res.json('index');
  }
}

export default new HomeController();
