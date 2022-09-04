package aplication;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.SQLException;

import db.DB;

public class cadastroCliente {

	public static void main(String[] args) {
		Connection conn = null;
		PreparedStatement st = null;
		try {
			conn = DB.getConnection();
			
			st = conn.prepareStatement(
					"INSERT INTO cliente "
					+ "(nome,nascimento,cpf,email) "
					+"Values "
					+"(?,?,?,?)");
			st.setString(1, "Margoh Selly");
			st.setString(2, "05-07-1988");
			st.setInt(3, 1487518200);
			st.setString(4, "Margoh@gmail.com");
			
			int rowsAffected = st.executeUpdate();
			
			System.out.println("Done! Rows Affected: "+ rowsAffected );
			}
			catch (SQLException e) {
				e.printStackTrace();
			}
			finally {
				DB.closeStatement(st);
				DB.closeConnection();
			}
			
		}
	}

