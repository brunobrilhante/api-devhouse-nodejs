/*
index: listagem de sessoes
store: criar uma sessao
show: listar unica sessao
update: alterar uma sessao
destroy: deletar uma sessao
*/

import User from "../models/User";

class SessionController {

  async store(req, res) {
    const { email } = req.body;
    let user = await User.findOne({ email });

    if (!user) {
      user = await User.create({ email });
    }
    
    return res.json(user);
  }

}

export default new SessionController();