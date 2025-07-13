using Microsoft.AspNetCore.Mvc;
using WebAPI3.Filters;
using WebAPI3;

[ApiController]
[Route("[controller]")]
//[ServiceFilter(typeof(CustomAuthFilter))]
public class EmployeeController : ControllerBase
{
    private static List<Employee> employees;

    public EmployeeController()
    {
        if (employees == null)
        {
            employees = GetStandardEmployeeList();
        }
    }

    [HttpGet]
    [ProducesResponseType(typeof(List<Employee>), 200)]
    [ProducesResponseType(500)] 
    public ActionResult<List<Employee>> Get()
    {
        throw new Exception("Test exception from Get method");

    }

    [HttpPost]
    public ActionResult<Employee> Post(Employee emp)
    {
        employees.Add(emp);
        return Ok(emp);
    }

    [HttpPut("{id}")]
    public ActionResult<Employee> Put(int id, [FromBody] Employee emp)
    {
        if (id <= 0)
        {
            return BadRequest("Invalid employee id");
        }

        var existing = employees.FirstOrDefault(e => e.Id == id);

        if (existing == null)
        {
            return BadRequest("Invalid employee id");
        }
        existing.Name = emp.Name;
        existing.Salary = emp.Salary;
        existing.Permanent = emp.Permanent;
        existing.Department = emp.Department;
        existing.Skills = emp.Skills;
        existing.DateOfBirth = emp.DateOfBirth;
        return Ok(existing);
    }

    private List<Employee> GetStandardEmployeeList()
    {
        return new List<Employee>
        {
            new Employee
            {
                Id = 1,
                Name = "John",
                Salary = 50000,
                Permanent = true,
                Department = new Department { Id = 1, Name = "IT" },
                Skills = new List<Skill>
                {
                    new Skill { Id = 1, SkillName = "C#" },
                    new Skill { Id = 2, SkillName = "SQL" }
                },
                DateOfBirth = new DateTime(1990, 5, 23)
            }
        };
    }
}
