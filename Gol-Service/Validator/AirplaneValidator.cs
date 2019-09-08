using FluentValidation;
using Gol_Domain.Entities;
using System;
using System.Collections.Generic;
using System.Text;

namespace Gol_Service.Validator
{
    public class AirplaneValidator : AbstractValidator<Airplane>
    {
        public AirplaneValidator()
        {
            RuleFor(rf => rf).NotNull().OnAnyFailure(af =>
            {
                throw new ArgumentNullException("Sorry about the inconvenience, airplane not found.");
            });

            RuleFor(rf => rf.AirplaneModelId)
                .NotNull().WithMessage("Please selected the model.")
                .NotEmpty().WithMessage("Please selected the model.");

            RuleFor(rf => rf.Code)
                .NotNull().WithMessage("Please input the airplane code.")
                .NotEmpty().WithMessage("Please input the model.");

            RuleFor(rf => rf.NumberOfPassengers)
                .NotNull().WithMessage("Please put the max number of passengers.")
                .NotEmpty().WithMessage("Please put the max number of passengers.")
                .NotEqual(0).WithMessage("Number of passangers can't be 0(zero).");            
        }
    }
}
