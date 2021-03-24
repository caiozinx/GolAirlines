using FluentValidation;
using Gol_Domain.Entities;
using System;
using System.Collections.Generic;
using System.Text;

namespace Gol_Service.Validator
{
    public class AirplaneModelValidator : AbstractValidator<AirplaneModel>
    {
        public AirplaneModelValidator()
        {
            RuleFor(rf => rf).NotNull().OnAnyFailure(af =>
            {
                throw new ArgumentNullException("Sorry about the inconvenience, airplane model not found.");
            });

            RuleFor(rf => rf.Company)
                .NotNull().WithMessage("Please select the company.")
                .NotEmpty().WithMessage("Please select the company.");

            RuleFor(rf => rf.Name)
                .NotNull().WithMessage("Please input the name")
                .NotEmpty().WithMessage("Please input the name");

            RuleFor(rf => rf.Role)
                .NotNull().WithMessage("Please select the role.")
                .NotEmpty().WithMessage("Please select the role.");
        }
    }
}
