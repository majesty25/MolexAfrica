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
  Send,
  Users,
  Home
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

export default function KiddieStemApplication() {
  const { toast } = useToast();
  const [currentStep, setCurrentStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const [formData, setFormData] = useState({
    // Child Information
    childFirstName: '',
    childLastName: '',
    childDateOfBirth: '',
    childGender: '',
    childGrade: '',
    childSchool: '',
    childInterests: '',

    // Parent/Guardian Information
    parentFirstName: '',
    parentLastName: '',
    parentEmail: '',
    parentPhone: '',
    parentRelationship: '',
    parentOccupation: '',

    // Family Information
    address: '',
    city: '',
    region: '',
    nationality: '',
    householdSize: '',
    monthlyIncome: '',
    otherChildren: '',

    // Program Interest
    heardAboutProgram: '',
    childStemInterest: '',
    parentMotivation: '',
    programExpectations: '',
    specialNeeds: '',

    // Emergency Contact
    emergencyContactName: '',
    emergencyContactPhone: '',
    emergencyContactRelationship: '',

    // Medical Information
    medicalConditions: '',
    allergies: '',
    medications: '',
    doctorName: '',
    doctorPhone: '',

    // Consent
    agreeToTerms: false,
    agreeToDataProcessing: false,
    agreeToPhotoRelease: false,
    agreeToTransport: false,
    parentSignature: '',
    applicationDate: new Date().toISOString().split('T')[0]
  });

  const steps = [
    { id: 1, title: 'Child Info', icon: User },
    { id: 2, title: 'Parent Info', icon: Users },
    { id: 3, title: 'Family Info', icon: Home },
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
        return formData.childFirstName && formData.childLastName && formData.childDateOfBirth && formData.childGender && formData.childGrade;
      case 2:
        return formData.parentFirstName && formData.parentLastName && formData.parentEmail && formData.parentPhone && formData.parentRelationship;
      case 3:
        return formData.address && formData.city && formData.region;
      case 4:
        return formData.parentMotivation && formData.programExpectations;
      case 5:
        return formData.agreeToTerms && formData.agreeToDataProcessing && formData.agreeToTransport && formData.emergencyContactName && formData.emergencyContactPhone;
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
        description: "Thank you for applying to KIDDIE STEM. We'll review your application and get back to you within 2 weeks.",
      });

      // Reset form
      setFormData({
        childFirstName: '', childLastName: '', childDateOfBirth: '', childGender: '', childGrade: '', childSchool: '', childInterests: '',
        parentFirstName: '', parentLastName: '', parentEmail: '', parentPhone: '', parentRelationship: '', parentOccupation: '',
        address: '', city: '', region: '', nationality: '', householdSize: '', monthlyIncome: '', otherChildren: '',
        heardAboutProgram: '', childStemInterest: '', parentMotivation: '', programExpectations: '', specialNeeds: '',
        emergencyContactName: '', emergencyContactPhone: '', emergencyContactRelationship: '',
        medicalConditions: '', allergies: '', medications: '', doctorName: '', doctorPhone: '',
        agreeToTerms: false, agreeToDataProcessing: false, agreeToPhotoRelease: false, agreeToTransport: false,
        parentSignature: '', applicationDate: new Date().toISOString().split('T')[0]
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
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">Child Information</h2>
              <p className="text-gray-600 dark:text-gray-300">Tell us about your child</p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="childFirstName">Child's First Name *</Label>
                <Input
                  id="childFirstName"
                  value={formData.childFirstName}
                  onChange={(e) => handleInputChange('childFirstName', e.target.value)}
                  placeholder="Enter child's first name"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="childLastName">Child's Last Name *</Label>
                <Input
                  id="childLastName"
                  value={formData.childLastName}
                  onChange={(e) => handleInputChange('childLastName', e.target.value)}
                  placeholder="Enter child's last name"
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="childDateOfBirth">Date of Birth *</Label>
                <Input
                  id="childDateOfBirth"
                  type="date"
                  value={formData.childDateOfBirth}
                  onChange={(e) => handleInputChange('childDateOfBirth', e.target.value)}
                />
              </div>
              <div className="space-y-2">
                <Label>Gender *</Label>
                <RadioGroup value={formData.childGender} onValueChange={(value) => handleInputChange('childGender', value)}>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="female" id="child-female" />
                    <Label htmlFor="child-female">Female</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="male" id="child-male" />
                    <Label htmlFor="child-male">Male</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="other" id="child-other" />
                    <Label htmlFor="child-other">Other</Label>
                  </div>
                </RadioGroup>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="childGrade">Current Grade Level *</Label>
                <Select value={formData.childGrade} onValueChange={(value) => handleInputChange('childGrade', value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select grade" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="kindergarten">Kindergarten</SelectItem>
                    <SelectItem value="grade1">Grade 1</SelectItem>
                    <SelectItem value="grade2">Grade 2</SelectItem>
                    <SelectItem value="grade3">Grade 3</SelectItem>
                    <SelectItem value="grade4">Grade 4</SelectItem>
                    <SelectItem value="grade5">Grade 5</SelectItem>
                    <SelectItem value="grade6">Grade 6</SelectItem>
                    <SelectItem value="jhs1">JHS 1</SelectItem>
                    <SelectItem value="jhs2">JHS 2</SelectItem>
                    <SelectItem value="jhs3">JHS 3</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="childSchool">School Name</Label>
                <Input
                  id="childSchool"
                  value={formData.childSchool}
                  onChange={(e) => handleInputChange('childSchool', e.target.value)}
                  placeholder="Name of child's school"
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="childInterests">Child's Interests and Hobbies</Label>
              <Textarea
                id="childInterests"
                value={formData.childInterests}
                onChange={(e) => handleInputChange('childInterests', e.target.value)}
                placeholder="What activities does your child enjoy? Any special interests?"
                rows={3}
              />
            </div>
          </div>
        );

      case 2:
        return (
          <div className="space-y-6">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">Parent/Guardian Information</h2>
              <p className="text-gray-600 dark:text-gray-300">Tell us about yourself</p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="parentFirstName">First Name *</Label>
                <Input
                  id="parentFirstName"
                  value={formData.parentFirstName}
                  onChange={(e) => handleInputChange('parentFirstName', e.target.value)}
                  placeholder="Enter your first name"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="parentLastName">Last Name *</Label>
                <Input
                  id="parentLastName"
                  value={formData.parentLastName}
                  onChange={(e) => handleInputChange('parentLastName', e.target.value)}
                  placeholder="Enter your last name"
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="parentEmail">Email Address *</Label>
                <Input
                  id="parentEmail"
                  type="email"
                  value={formData.parentEmail}
                  onChange={(e) => handleInputChange('parentEmail', e.target.value)}
                  placeholder="your.email@example.com"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="parentPhone">Phone Number *</Label>
                <Input
                  id="parentPhone"
                  value={formData.parentPhone}
                  onChange={(e) => handleInputChange('parentPhone', e.target.value)}
                  placeholder="+233 XX XXX XXXX"
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="parentRelationship">Relationship to Child *</Label>
                <Select value={formData.parentRelationship} onValueChange={(value) => handleInputChange('parentRelationship', value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select relationship" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="mother">Mother</SelectItem>
                    <SelectItem value="father">Father</SelectItem>
                    <SelectItem value="guardian">Legal Guardian</SelectItem>
                    <SelectItem value="grandparent">Grandparent</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="parentOccupation">Occupation</Label>
                <Input
                  id="parentOccupation"
                  value={formData.parentOccupation}
                  onChange={(e) => handleInputChange('parentOccupation', e.target.value)}
                  placeholder="Your occupation/profession"
                />
              </div>
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

            <div className="space-y-2">
              <Label htmlFor="address">Home Address *</Label>
              <Input
                id="address"
                value={formData.address}
                onChange={(e) => handleInputChange('address', e.target.value)}
                placeholder="Street address"
              />
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              <div className="space-y-2">
                <Label htmlFor="city">City *</Label>
                <Input
                  id="city"
                  value={formData.city}
                  onChange={(e) => handleInputChange('city', e.target.value)}
                  placeholder="City"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="region">Region *</Label>
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

            <div className="space-y-2">
              <Label htmlFor="otherChildren">Other Children in Household</Label>
              <Textarea
                id="otherChildren"
                value={formData.otherChildren}
                onChange={(e) => handleInputChange('otherChildren', e.target.value)}
                placeholder="Names and ages of other children in the household (if any)"
                rows={2}
              />
            </div>
          </div>
        );

      case 4:
        return (
          <div className="space-y-6">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">Interest & Goals</h2>
              <p className="text-gray-600 dark:text-gray-300">Share your expectations and motivations</p>
            </div>

            <div className="space-y-2">
              <Label htmlFor="heardAboutProgram">How did you hear about KIDDIE STEM?</Label>
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
              <Label>Child's Interest in STEM</Label>
              <RadioGroup value={formData.childStemInterest} onValueChange={(value) => handleInputChange('childStemInterest', value)}>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="very-interested" id="stem-very-interested" />
                  <Label htmlFor="stem-very-interested">Very Interested</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="somewhat-interested" id="stem-somewhat-interested" />
                  <Label htmlFor="stem-somewhat-interested">Somewhat Interested</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="not-interested" id="stem-not-interested" />
                  <Label htmlFor="stem-not-interested">Not Very Interested</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="unknown" id="stem-unknown" />
                  <Label htmlFor="stem-unknown">Not Sure Yet</Label>
                </div>
              </RadioGroup>
            </div>

            <div className="space-y-2">
              <Label htmlFor="parentMotivation">Why do you want your child to join KIDDIE STEM? *</Label>
              <Textarea
                id="parentMotivation"
                value={formData.parentMotivation}
                onChange={(e) => handleInputChange('parentMotivation', e.target.value)}
                placeholder="What are your goals for your child's participation in STEM education?"
                rows={4}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="programExpectations">What are your expectations for the program? *</Label>
              <Textarea
                id="programExpectations"
                value={formData.programExpectations}
                onChange={(e) => handleInputChange('programExpectations', e.target.value)}
                placeholder="What do you hope your child will learn and achieve?"
                rows={4}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="specialNeeds">Special Needs or Considerations</Label>
              <Textarea
                id="specialNeeds"
                value={formData.specialNeeds}
                onChange={(e) => handleInputChange('specialNeeds', e.target.value)}
                placeholder="Any special educational needs, learning challenges, or accommodations needed?"
                rows={3}
              />
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
                  <Label htmlFor="emergencyContactRelationship">Relationship to Child</Label>
                  <Input
                    id="emergencyContactRelationship"
                    value={formData.emergencyContactRelationship}
                    onChange={(e) => handleInputChange('emergencyContactRelationship', e.target.value)}
                    placeholder="e.g., Aunt, Uncle, Neighbor"
                  />
                </div>
              </CardContent>
            </Card>

            {/* Medical Information */}
            <Card>
              <CardHeader>
                <CardTitle>Medical Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="medicalConditions">Medical Conditions</Label>
                  <Textarea
                    id="medicalConditions"
                    value={formData.medicalConditions}
                    onChange={(e) => handleInputChange('medicalConditions', e.target.value)}
                    placeholder="Any medical conditions your child has?"
                    rows={2}
                  />
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="allergies">Allergies</Label>
                    <Input
                      id="allergies"
                      value={formData.allergies}
                      onChange={(e) => handleInputChange('allergies', e.target.value)}
                      placeholder="Food, medication, environmental allergies"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="medications">Current Medications</Label>
                    <Input
                      id="medications"
                      value={formData.medications}
                      onChange={(e) => handleInputChange('medications', e.target.value)}
                      placeholder="Any regular medications"
                    />
                  </div>
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="doctorName">Family Doctor Name</Label>
                    <Input
                      id="doctorName"
                      value={formData.doctorName}
                      onChange={(e) => handleInputChange('doctorName', e.target.value)}
                      placeholder="Doctor's full name"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="doctorPhone">Doctor's Phone</Label>
                    <Input
                      id="doctorPhone"
                      value={formData.doctorPhone}
                      onChange={(e) => handleInputChange('doctorPhone', e.target.value)}
                      placeholder="+233 XX XXX XXXX"
                    />
                  </div>
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
                    I agree to the KIDDIE STEM program terms and conditions, including participation requirements,
                    safety guidelines, and program commitments. *
                  </Label>
                </div>

                <div className="flex items-start space-x-2">
                  <Checkbox
                    id="agreeToDataProcessing"
                    checked={formData.agreeToDataProcessing}
                    onCheckedChange={(checked) => handleInputChange('agreeToDataProcessing', checked)}
                  />
                  <Label htmlFor="agreeToDataProcessing" className="text-sm leading-relaxed">
                    I consent to the collection and processing of my child's personal and medical data for program administration,
                    evaluation, and communication purposes in accordance with data protection regulations. *
                  </Label>
                </div>

                <div className="flex items-start space-x-2">
                  <Checkbox
                    id="agreeToPhotoRelease"
                    checked={formData.agreeToPhotoRelease}
                    onCheckedChange={(checked) => handleInputChange('agreeToPhotoRelease', checked)}
                  />
                  <Label htmlFor="agreeToPhotoRelease" className="text-sm leading-relaxed">
                    I give permission for photographs and videos of my child to be taken during program activities
                    for promotional and educational purposes.
                  </Label>
                </div>

                <div className="flex items-start space-x-2">
                  <Checkbox
                    id="agreeToTransport"
                    checked={formData.agreeToTransport}
                    onCheckedChange={(checked) => handleInputChange('agreeToTransport', checked)}
                  />
                  <Label htmlFor="agreeToTransport" className="text-sm leading-relaxed">
                    I understand that transportation to and from program activities is the responsibility of the parent/guardian,
                    and I agree to ensure timely pickup and drop-off of my child. *
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
                    <h4 className="font-semibold mb-2">Child Information</h4>
                    <p>Name: {formData.childFirstName} {formData.childLastName}</p>
                    <p>Grade: {formData.childGrade}</p>
                    <p>School: {formData.childSchool || 'Not specified'}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Parent Information</h4>
                    <p>Name: {formData.parentFirstName} {formData.parentLastName}</p>
                    <p>Email: {formData.parentEmail}</p>
                    <p>Phone: {formData.parentPhone}</p>
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
        title="Apply to KIDDIE STEM - MOLEX Foundation Africa"
        description="Apply for your child to join the KIDDIE STEM program and discover the exciting world of Science, Technology, Engineering, and Mathematics."
        keywords="KIDDIE STEM application, children's STEM program, STEM education for kids, MOLEX Foundation application"
      />

      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-8">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-8">
            <Link href="/programs/kiddie-stem" className="inline-flex items-center text-primary hover:text-primary/80 mb-4">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to KIDDIE STEM Program
            </Link>
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
              Apply to KIDDIE STEM
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              Enroll your child in our exciting STEM education program for young learners
            </p>
          </div>

          {/* Progress Steps */}
          <div className="mb-8">
            <div className="flex items-center justify-between">
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