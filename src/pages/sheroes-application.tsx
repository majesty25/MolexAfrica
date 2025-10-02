import { useState } from "react";
import { Link } from "wouter";
import {
  ArrowLeft,
  User,
  Mail,
  Phone,
  MapPin,
  Calendar,
  GraduationCap,
  BookOpen,
  Target,
  Heart,
  CheckCircle,
  AlertCircle,
  Send
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { SEOHead } from "@/components/ui/seo-head";
import { useToast } from "@/hooks/use-toast";

export default function SheroesApplication() {
  const { toast } = useToast();
  const [currentStep, setCurrentStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const [formData, setFormData] = useState({
    // Personal Information
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    dateOfBirth: '',
    gender: '',
    address: '',
    city: '',
    region: '',
    nationality: '',

    // Academic Information
    schoolName: '',
    gradeLevel: '',
    academicPerformance: '',
    favoriteSubjects: '',
    interestedInStem: '',

    // Family Information
    parentName: '',
    parentPhone: '',
    parentEmail: '',
    householdSize: '',
    monthlyIncome: '',

    // Program Interest
    heardAboutProgram: '',
    motivation: '',
    careerGoals: '',
    challenges: '',
    supportNeeded: '',

    // Additional Information
    extracurricularActivities: '',
    leadershipExperience: '',
    communityService: '',
    specialSkills: '',
    futureCommitments: '',

    // Consent
    agreeToTerms: false,
    agreeToDataProcessing: false,
    emergencyContactName: '',
    emergencyContactPhone: '',
    medicalConditions: ''
  });

  const steps = [
    { id: 1, title: 'Personal Info', icon: User },
    { id: 2, title: 'Academic Info', icon: GraduationCap },
    { id: 3, title: 'Family Info', icon: Heart },
    { id: 4, title: 'Interest & Goals', icon: Target },
    { id: 5, title: 'Review & Submit', icon: CheckCircle }
  ];

  const handleInputChange = (field: string, value: any) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const validateStep = (step: number) => {
    switch (step) {
      case 1:
        return formData.firstName && formData.lastName && formData.email && formData.phone && formData.dateOfBirth && formData.gender;
      case 2:
        return formData.schoolName && formData.gradeLevel && formData.academicPerformance;
      case 3:
        return formData.parentName && formData.parentPhone;
      case 4:
        return formData.motivation && formData.careerGoals;
      case 5:
        return formData.agreeToTerms && formData.agreeToDataProcessing && formData.emergencyContactName && formData.emergencyContactPhone;
      default:
        return false;
    }
  };

  const handleNext = () => {
    if (validateStep(currentStep)) {
      setCurrentStep(prev => Math.min(prev + 1, steps.length));
    } else {
      toast({
        title: "Required Fields Missing",
        description: "Please fill in all required fields before proceeding.",
        variant: "destructive"
      });
    }
  };

  const handlePrevious = () => {
    setCurrentStep(prev => Math.max(prev - 1, 1));
  };

  const handleSubmit = async () => {
    if (!validateStep(5)) {
      toast({
        title: "Form Incomplete",
        description: "Please complete all required fields and agree to the terms.",
        variant: "destructive"
      });
      return;
    }

    setIsSubmitting(true);

    // Simulate API call
    try {
      await new Promise(resolve => setTimeout(resolve, 2000));

      toast({
        title: "Application Submitted Successfully!",
        description: "Thank you for applying to SHEROES in STEM. We'll review your application and get back to you within 2 weeks.",
      });

      // Reset form
      setFormData({
        firstName: '', lastName: '', email: '', phone: '', dateOfBirth: '', gender: '', address: '', city: '', region: '', nationality: '',
        schoolName: '', gradeLevel: '', academicPerformance: '', favoriteSubjects: '', interestedInStem: '',
        parentName: '', parentPhone: '', parentEmail: '', householdSize: '', monthlyIncome: '',
        heardAboutProgram: '', motivation: '', careerGoals: '', challenges: '', supportNeeded: '',
        extracurricularActivities: '', leadershipExperience: '', communityService: '', specialSkills: '', futureCommitments: '',
        agreeToTerms: false, agreeToDataProcessing: false, emergencyContactName: '', emergencyContactPhone: '', medicalConditions: ''
      });
      setCurrentStep(1);
    } catch (error) {
      toast({
        title: "Submission Failed",
        description: "There was an error submitting your application. Please try again.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const renderStepContent = () => {
    switch (currentStep) {
      case 1:
        return (
          <div className="space-y-6">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">Personal Information</h2>
              <p className="text-gray-600 dark:text-gray-300">Tell us about yourself</p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="firstName">First Name *</Label>
                <Input
                  id="firstName"
                  value={formData.firstName}
                  onChange={(e) => handleInputChange('firstName', e.target.value)}
                  placeholder="Enter your first name"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="lastName">Last Name *</Label>
                <Input
                  id="lastName"
                  value={formData.lastName}
                  onChange={(e) => handleInputChange('lastName', e.target.value)}
                  placeholder="Enter your last name"
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="email">Email Address *</Label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => handleInputChange('email', e.target.value)}
                  placeholder="your.email@example.com"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="phone">Phone Number *</Label>
                <Input
                  id="phone"
                  value={formData.phone}
                  onChange={(e) => handleInputChange('phone', e.target.value)}
                  placeholder="+233 XX XXX XXXX"
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="dateOfBirth">Date of Birth *</Label>
                <Input
                  id="dateOfBirth"
                  type="date"
                  value={formData.dateOfBirth}
                  onChange={(e) => handleInputChange('dateOfBirth', e.target.value)}
                />
              </div>
              <div className="space-y-2">
                <Label>Gender *</Label>
                <RadioGroup value={formData.gender} onValueChange={(value) => handleInputChange('gender', value)}>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="female" id="female" />
                    <Label htmlFor="female">Female</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="male" id="male" />
                    <Label htmlFor="male">Male</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="other" id="other" />
                    <Label htmlFor="other">Other</Label>
                  </div>
                </RadioGroup>
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="address">Home Address</Label>
              <Input
                id="address"
                value={formData.address}
                onChange={(e) => handleInputChange('address', e.target.value)}
                placeholder="Street address"
              />
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              <div className="space-y-2">
                <Label htmlFor="city">City</Label>
                <Input
                  id="city"
                  value={formData.city}
                  onChange={(e) => handleInputChange('city', e.target.value)}
                  placeholder="City"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="region">Region</Label>
                <Select value={formData.region} onValueChange={(value) => handleInputChange('region', value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select region" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="greater-accra">Greater Accra</SelectItem>
                    <SelectItem value="ashanti">Ashanti</SelectItem>
                    <SelectItem value="central">Central</SelectItem>
                    <SelectItem value="eastern">Eastern</SelectItem>
                    <SelectItem value="northern">Northern</SelectItem>
                    <SelectItem value="volta">Volta</SelectItem>
                    <SelectItem value="western">Western</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="nationality">Nationality</Label>
                <Input
                  id="nationality"
                  value={formData.nationality}
                  onChange={(e) => handleInputChange('nationality', e.target.value)}
                  placeholder="Ghanaian"
                />
              </div>
            </div>
          </div>
        );

      case 2:
        return (
          <div className="space-y-6">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">Academic Information</h2>
              <p className="text-gray-600 dark:text-gray-300">Tell us about your education</p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="schoolName">School Name *</Label>
                <Input
                  id="schoolName"
                  value={formData.schoolName}
                  onChange={(e) => handleInputChange('schoolName', e.target.value)}
                  placeholder="Name of your school"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="gradeLevel">Current Grade Level *</Label>
                <Select value={formData.gradeLevel} onValueChange={(value) => handleInputChange('gradeLevel', value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select grade" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="jhs1">JHS 1</SelectItem>
                    <SelectItem value="jhs2">JHS 2</SelectItem>
                    <SelectItem value="jhs3">JHS 3</SelectItem>
                    <SelectItem value="shs1">SHS 1</SelectItem>
                    <SelectItem value="shs2">SHS 2</SelectItem>
                    <SelectItem value="shs3">SHS 3</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="academicPerformance">Academic Performance *</Label>
              <Select value={formData.academicPerformance} onValueChange={(value) => handleInputChange('academicPerformance', value)}>
                <SelectTrigger>
                  <SelectValue placeholder="Select your academic standing" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="excellent">Excellent (80-100%)</SelectItem>
                  <SelectItem value="very-good">Very Good (70-79%)</SelectItem>
                  <SelectItem value="good">Good (60-69%)</SelectItem>
                  <SelectItem value="average">Average (50-59%)</SelectItem>
                  <SelectItem value="below-average">Below Average (Below 50%)</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="favoriteSubjects">Favorite Subjects</Label>
              <Input
                id="favoriteSubjects"
                value={formData.favoriteSubjects}
                onChange={(e) => handleInputChange('favoriteSubjects', e.target.value)}
                placeholder="e.g., Mathematics, Science, English"
              />
            </div>

            <div className="space-y-2">
              <Label>Interest in STEM Subjects</Label>
              <RadioGroup value={formData.interestedInStem} onValueChange={(value) => handleInputChange('interestedInStem', value)}>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="very-interested" id="very-interested" />
                  <Label htmlFor="very-interested">Very Interested</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="somewhat-interested" id="somewhat-interested" />
                  <Label htmlFor="somewhat-interested">Somewhat Interested</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="not-interested" id="not-interested" />
                  <Label htmlFor="not-interested">Not Very Interested</Label>
                </div>
              </RadioGroup>
            </div>
          </div>
        );

      case 3:
        return (
          <div className="space-y-6">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">Family Information</h2>
              <p className="text-gray-600 dark:text-gray-300">Tell us about your family background</p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="parentName">Parent/Guardian Name *</Label>
                <Input
                  id="parentName"
                  value={formData.parentName}
                  onChange={(e) => handleInputChange('parentName', e.target.value)}
                  placeholder="Full name of parent or guardian"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="parentPhone">Parent/Guardian Phone *</Label>
                <Input
                  id="parentPhone"
                  value={formData.parentPhone}
                  onChange={(e) => handleInputChange('parentPhone', e.target.value)}
                  placeholder="+233 XX XXX XXXX"
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="parentEmail">Parent/Guardian Email</Label>
              <Input
                id="parentEmail"
                type="email"
                value={formData.parentEmail}
                onChange={(e) => handleInputChange('parentEmail', e.target.value)}
                placeholder="parent.email@example.com"
              />
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="householdSize">Household Size</Label>
                <Select value={formData.householdSize} onValueChange={(value) => handleInputChange('householdSize', value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Number of people" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="1-3">1-3 people</SelectItem>
                    <SelectItem value="4-6">4-6 people</SelectItem>
                    <SelectItem value="7-10">7-10 people</SelectItem>
                    <SelectItem value="10+">More than 10</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="monthlyIncome">Monthly Household Income</Label>
                <Select value={formData.monthlyIncome} onValueChange={(value) => handleInputChange('monthlyIncome', value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select income range" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="below-500">Below GH₵500</SelectItem>
                    <SelectItem value="500-1000">GH₵500 - GH₵1,000</SelectItem>
                    <SelectItem value="1000-2000">GH₵1,000 - GH₵2,000</SelectItem>
                    <SelectItem value="2000-5000">GH₵2,000 - GH₵5,000</SelectItem>
                    <SelectItem value="above-5000">Above GH₵5,000</SelectItem>
                    <SelectItem value="prefer-not-say">Prefer not to say</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>
        );

      case 4:
        return (
          <div className="space-y-6">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">Interest & Goals</h2>
              <p className="text-gray-600 dark:text-gray-300">Share your aspirations and motivations</p>
            </div>

            <div className="space-y-2">
              <Label htmlFor="heardAboutProgram">How did you hear about SHEROES in STEM?</Label>
              <Select value={formData.heardAboutProgram} onValueChange={(value) => handleInputChange('heardAboutProgram', value)}>
                <SelectTrigger>
                  <SelectValue placeholder="Select how you found us" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="school">School/Teacher</SelectItem>
                  <SelectItem value="social-media">Social Media</SelectItem>
                  <SelectItem value="friends-family">Friends/Family</SelectItem>
                  <SelectItem value="website">MOLEX Website</SelectItem>
                  <SelectItem value="community-event">Community Event</SelectItem>
                  <SelectItem value="other">Other</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="motivation">Why do you want to join SHEROES in STEM? *</Label>
              <Textarea
                id="motivation"
                value={formData.motivation}
                onChange={(e) => handleInputChange('motivation', e.target.value)}
                placeholder="Tell us about your motivation and interest in STEM education..."
                rows={4}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="careerGoals">What are your career goals? *</Label>
              <Textarea
                id="careerGoals"
                value={formData.careerGoals}
                onChange={(e) => handleInputChange('careerGoals', e.target.value)}
                placeholder="Describe your dream career and how STEM education can help you achieve it..."
                rows={4}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="challenges">What challenges do you face in pursuing STEM education?</Label>
              <Textarea
                id="challenges"
                value={formData.challenges}
                onChange={(e) => handleInputChange('challenges', e.target.value)}
                placeholder="Share any obstacles you encounter in your STEM learning journey..."
                rows={3}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="supportNeeded">What kind of support do you need to succeed?</Label>
              <Textarea
                id="supportNeeded"
                value={formData.supportNeeded}
                onChange={(e) => handleInputChange('supportNeeded', e.target.value)}
                placeholder="Tell us what resources or support would help you thrive in STEM..."
                rows={3}
              />
            </div>

            <div className="space-y-4">
              <Label>Additional Information</Label>

              <div className="space-y-2">
                <Label htmlFor="extracurricularActivities">Extracurricular Activities</Label>
                <Textarea
                  id="extracurricularActivities"
                  value={formData.extracurricularActivities}
                  onChange={(e) => handleInputChange('extracurricularActivities', e.target.value)}
                  placeholder="Sports, clubs, hobbies, etc."
                  rows={2}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="leadershipExperience">Leadership Experience</Label>
                <Textarea
                  id="leadershipExperience"
                  value={formData.leadershipExperience}
                  onChange={(e) => handleInputChange('leadershipExperience', e.target.value)}
                  placeholder="Any leadership roles or experiences..."
                  rows={2}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="specialSkills">Special Skills or Talents</Label>
                <Textarea
                  id="specialSkills"
                  value={formData.specialSkills}
                  onChange={(e) => handleInputChange('specialSkills', e.target.value)}
                  placeholder="Any special skills, talents, or unique abilities..."
                  rows={2}
                />
              </div>
            </div>
          </div>
        );

      case 5:
        return (
          <div className="space-y-6">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">Review & Submit</h2>
              <p className="text-gray-600 dark:text-gray-300">Please review your application before submitting</p>
            </div>

            {/* Emergency Contact */}
            <Card>
              <CardHeader>
                <CardTitle>Emergency Contact Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="emergencyContactName">Emergency Contact Name *</Label>
                    <Input
                      id="emergencyContactName"
                      value={formData.emergencyContactName}
                      onChange={(e) => handleInputChange('emergencyContactName', e.target.value)}
                      placeholder="Full name"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="emergencyContactPhone">Emergency Contact Phone *</Label>
                    <Input
                      id="emergencyContactPhone"
                      value={formData.emergencyContactPhone}
                      onChange={(e) => handleInputChange('emergencyContactPhone', e.target.value)}
                      placeholder="+233 XX XXX XXXX"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="medicalConditions">Medical Conditions or Allergies</Label>
                  <Textarea
                    id="medicalConditions"
                    value={formData.medicalConditions}
                    onChange={(e) => handleInputChange('medicalConditions', e.target.value)}
                    placeholder="Any medical conditions, allergies, or special needs we should be aware of..."
                    rows={2}
                  />
                </div>
              </CardContent>
            </Card>

            {/* Terms and Conditions */}
            <Card>
              <CardHeader>
                <CardTitle>Terms & Conditions</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start space-x-2">
                  <Checkbox
                    id="agreeToTerms"
                    checked={formData.agreeToTerms}
                    onCheckedChange={(checked) => handleInputChange('agreeToTerms', checked)}
                  />
                  <Label htmlFor="agreeToTerms" className="text-sm leading-relaxed">
                    I agree to the SHEROES in STEM program terms and conditions, including participation requirements,
                    code of conduct, and program commitments. *
                  </Label>
                </div>

                <div className="flex items-start space-x-2">
                  <Checkbox
                    id="agreeToDataProcessing"
                    checked={formData.agreeToDataProcessing}
                    onCheckedChange={(checked) => handleInputChange('agreeToDataProcessing', checked)}
                  />
                  <Label htmlFor="agreeToDataProcessing" className="text-sm leading-relaxed">
                    I consent to the collection and processing of my personal data for program administration,
                    evaluation, and communication purposes in accordance with data protection regulations. *
                  </Label>
                </div>
              </CardContent>
            </Card>

            {/* Application Summary */}
            <Card>
              <CardHeader>
                <CardTitle>Application Summary</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6 text-sm">
                  <div>
                    <h4 className="font-semibold mb-2">Personal Information</h4>
                    <p>Name: {formData.firstName} {formData.lastName}</p>
                    <p>Email: {formData.email}</p>
                    <p>Phone: {formData.phone}</p>
                    <p>School: {formData.schoolName}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Program Interest</h4>
                    <p>Grade: {formData.gradeLevel}</p>
                    <p>STEM Interest: {formData.interestedInStem}</p>
                    <p>Parent: {formData.parentName}</p>
                    <p>Region: {formData.region}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <>
      <SEOHead
        title="Apply to SHEROES in STEM - MOLEX Foundation Africa"
        description="Apply to join the SHEROES in STEM program and become part of the next generation of women in technology and science."
        keywords="SHEROES application, STEM program application, girls in STEM, MOLEX Foundation application"
      />

      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-8">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-8">
            <Link href="/programs/sheroes" className="inline-flex items-center text-primary hover:text-primary/80 mb-4">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to SHEROES Program
            </Link>
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
              Apply to SHEROES in STEM
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              Join our transformative program for girls in Science, Technology, Engineering, and Mathematics
            </p>
          </div>

          {/* Progress Steps */}
          <div className="mb-8">
            {/* Mobile: Vertical Layout */}
            <div className="md:hidden space-y-4">
              {steps.map((step, index) => (
                <div key={step.id} className="flex items-center">
                  <div className={`flex items-center justify-center w-10 h-10 rounded-full flex-shrink-0 ${
                    currentStep >= step.id
                      ? 'bg-primary text-white'
                      : 'bg-gray-200 dark:bg-gray-700 text-gray-600 dark:text-gray-400'
                  }`}>
                    {currentStep > step.id ? (
                      <CheckCircle className="h-5 w-5" />
                    ) : (
                      <step.icon className="h-5 w-5" />
                    )}
                  </div>
                  <span className={`ml-3 text-sm font-medium ${
                    currentStep >= step.id
                      ? 'text-primary'
                      : 'text-gray-600 dark:text-gray-400'
                  }`}>
                    {step.title}
                  </span>
                  {index < steps.length - 1 && (
                    <div className={`flex-1 h-0.5 ml-4 ${
                      currentStep > step.id
                        ? 'bg-primary'
                        : 'bg-gray-200 dark:bg-gray-700'
                    }`} />
                  )}
                </div>
              ))}
            </div>

            {/* Desktop: Horizontal Layout */}
            <div className="hidden md:flex items-center justify-between">
              {steps.map((step, index) => (
                <div key={step.id} className="flex items-center">
                  <div className={`flex items-center justify-center w-10 h-10 rounded-full ${
                    currentStep >= step.id
                      ? 'bg-primary text-white'
                      : 'bg-gray-200 dark:bg-gray-700 text-gray-600 dark:text-gray-400'
                  }`}>
                    {currentStep > step.id ? (
                      <CheckCircle className="h-5 w-5" />
                    ) : (
                      <step.icon className="h-5 w-5" />
                    )}
                  </div>
                  <span className={`ml-2 text-sm font-medium ${
                    currentStep >= step.id
                      ? 'text-primary'
                      : 'text-gray-600 dark:text-gray-400'
                  }`}>
                    {step.title}
                  </span>
                  {index < steps.length - 1 && (
                    <div className={`flex-1 h-0.5 mx-4 ${
                      currentStep > step.id
                        ? 'bg-primary'
                        : 'bg-gray-200 dark:bg-gray-700'
                    }`} />
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Form Content */}
          <Card>
            <CardContent className="p-8">
              {renderStepContent()}

              {/* Navigation Buttons */}
              <div className="flex justify-between mt-8 pt-6 border-t">
                <Button
                  variant="outline"
                  onClick={handlePrevious}
                  disabled={currentStep === 1}
                >
                  Previous
                </Button>

                {currentStep < steps.length ? (
                  <Button onClick={handleNext}>
                    Next Step
                  </Button>
                ) : (
                  <Button
                    onClick={handleSubmit}
                    disabled={isSubmitting}
                    className="bg-primary hover:bg-primary/90"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2" />
                        Submitting...
                      </>
                    ) : (
                      <>
                        <Send className="h-4 w-4 mr-2" />
                        Submit Application
                      </>
                    )}
                  </Button>
                )}
              </div>
            </CardContent>
          </Card>

          {/* Footer Note */}
          <div className="text-center mt-8 text-sm text-gray-600 dark:text-gray-400">
            <p>
              Need help with your application?
              <a href="mailto:info@molexfoundation.org" className="text-primary hover:underline ml-1">
                Contact us
              </a>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}